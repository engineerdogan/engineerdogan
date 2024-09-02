function formatMacAddress(value) {
    value = value.replace(/[^0-9A-Fa-f]/g, '');
    return value.length > 2 ? value.match(/.{1,2}/g).join('-').toUpperCase() : value.toUpperCase();
}

function isValidMacAddress(macAddress) {
    const macRegex = /^([0-9A-Fa-f]{2}[-:]){5}[0-9A-Fa-f]{2}$/;
    return macRegex.test(macAddress);
}

document.getElementById("macInput").addEventListener("input", function (e) {
    e.target.value = formatMacAddress(e.target.value);
    document.getElementById("generateButton").disabled = e.target.value.length === 0;
});

document.getElementById("generateButton").addEventListener("click", function () {
    let macAddress = document.getElementById("macInput").value.trim().toUpperCase();
    let resultElement = document.getElementById("result");

    if (isValidMacAddress(macAddress)) {
        const hash = CryptoJS.SHA256(macAddress).toString(CryptoJS.enc.Base64);
        let password = hash.substring(0, 12);
        resultElement.textContent = password;
        resultElement.style.color = "#333";
        document.getElementById("macInput").style.borderColor = "#ddd";
    } else {
        resultElement.textContent = "Lütfen geçerli bir MAC adresi girin.";
        resultElement.style.color = "red";
        document.getElementById("macInput").style.borderColor = "red";
    }
});
