function formatMacAddress(value) {
    // Tüm geçersiz karakterleri temizle
    value = value.replace(/[^0-9A-Fa-f]/g, '');

    // MAC adresinin formatını düzenle
    return value.length > 2 ? value.match(/.{1,2}/g).join('-').toUpperCase() : value.toUpperCase();
}

function isValidMacAddress(macAddress) {
    // MAC adresinin geçerliliğini kontrol et
    const macRegex = /^([0-9A-Fa-f]{2}[-:]){5}[0-9A-Fa-f]{2}$/;
    return macRegex.test(macAddress);
}

document.getElementById("macInput").addEventListener("input", function (e) {
    let value = e.target.value;
    
    // MAC adresinin 12 karakterden uzun olmamasını sağla
    if (value.replace(/[^0-9A-Fa-f]/g, '').length > 12) {
        value = value.slice(0, 17); // 12 karakter + 5 ayırıcı
    }

    e.target.value = formatMacAddress(value);
    document.getElementById("generateButton").disabled = e.target.value.length === 0;
});

document.getElementById("generateButton").addEventListener("click", function () {
    let macAddress = document.getElementById("macInput").value.trim().toUpperCase();
    let resultElement = document.getElementById("result");
    let passwordText = document.getElementById("passwordText");
    let copyButton = document.getElementById("copyButton");

    if (isValidMacAddress(macAddress)) {
        const hash = CryptoJS.SHA256(macAddress).toString(CryptoJS.enc.Base64);
        let password = hash.substring(0, 12);
        passwordText.textContent = password;
        resultElement.style.color = "#333";
        document.getElementById("macInput").style.borderColor = "#ddd";
        copyButton.disabled = false;
    } else {
        passwordText.textContent = "Lütfen geçerli bir MAC adresi girin.";
        resultElement.style.color = "red";
        document.getElementById("macInput").style.borderColor = "red";
        copyButton.disabled = true;
    }
});

document.getElementById("copyButton").addEventListener("click", function () {
    let password = document.getElementById("passwordText").textContent;
    navigator.clipboard.writeText(password).then(function () {
        alert('Şifre panoya kopyalandı!');
    }, function (err) {
        console.error('Kopyalama hatası:', err);
    });
});
