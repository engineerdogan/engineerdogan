document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".container");
    const navLinks = document.querySelectorAll(".navbar a");

    function loadContent(page) {
        switch (page) {
            case "generate":
                content.innerHTML = `
                    <div class="warning">
                        Şifreler MAC adresi kullanılarak oluşturulmaktadır.
                    </div>
                    <div class="form-container">
                        <div class="content-header">
                            <i class="fas fa-key icon-header"></i>
                            <h1>Şifre Üret</h1>
                        </div>
                        <label for="macInput">MAC Adresini Girin:</label>
                        <input type="text" id="macInput" placeholder="00-14-22-01-23-45">
                        <button id="generateButton" disabled>Şifre Üret</button>
                        <div id="result">
                            <span id="passwordText"></span>
                        </div>
                    </div>
                `;
                break;

            case "page1":
            case "page2":
            case "page3":
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-file-alt"></i>
                        <h1>${page === 'page1' ? 'Sayfa 1' : page === 'page2' ? 'Sayfa 2' : 'Sayfa 3'}</h1>
                    </div>
                    <p>Düzenlenecek</p>
                `;
                break;

            default:
                content.innerHTML = `<h1>Sayfa Bulunamadı</h1>`;
        }

        // Aktif sekmeyi güncelle
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`#nav${page.charAt(0).toUpperCase() + page.slice(1)}`).classList.add("active");
    }

    // Sayfa yüklenirken ilk içeriği yükle
    loadContent("generate");

    // Navbar tıklama olayları
    document.getElementById("navGenerate").addEventListener("click", function () {
        loadContent("generate");
    });
    document.getElementById("navPage1").addEventListener("click", function () {
        loadContent("page1");
    });
    document.getElementById("navPage2").addEventListener("click", function () {
        loadContent("page2");
    });
    document.getElementById("navPage3").addEventListener("click", function () {
        loadContent("page3");
    });
});
