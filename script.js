document.getElementById("macInput").addEventListener("input", function (e) {
    let value = e.target.value;

    // Tüm ayırıcı karakterleri kaldır
    value = value.replace(/[^0-9A-Fa-f]/g, '');

    // 2'li gruplar halinde ayırıcı karakterleri ekle
    if (value.length > 2) {
        value = value.match(/.{1,2}/g).join('-');
    }

    // MAC adresini büyük harfe çevir
    e.target.value = value.toUpperCase();
});

document.getElementById("generateButton").addEventListener("click", function () {
    let macAddress = document.getElementById("macInput").value.trim().toUpperCase();
    
    // Geçerli MAC adresi kontrolü
    const macRegex = /^([0-9A-Fa-f]{2}[-:]){5}[0-9A-Fa-f]{2}$/;
    
    if (macRegex.test(macAddress)) {
        // MAC adresinin SHA-256 hash'ini hesapla
        const hash = CryptoJS.SHA256(macAddress).toString(CryptoJS.enc.Base64);
        
        // Base64 hash'inden ilk 12 karakteri al
        let password = hash.substring(0, 12);
        
        // Şifreyi sadece alfanümerik ve özel karakterler ile sınırla
        password = password.replace(/[^a-zA-Z0-9!@#$%^&*()_+]/g, '');

        // Eğer şifre 12 karakterden kısa ise tamamla
        if (password.length < 12) {
            password = password.padEnd(12, '0');
        }

        // Sonuç alanını güncelle
        let resultElement = document.getElementById("result");
        resultElement.textContent = password;
    } else {
        document.getElementById("result").textContent = "Lütfen geçerli bir MAC adresi girin.";
    }
});

document.getElementById("macInput").addEventListener("input", function () {
    document.getElementById("generateButton").disabled = false; // Butonu etkinleştir
});
