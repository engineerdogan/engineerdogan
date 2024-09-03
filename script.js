document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById("mainContent");
    const navLinks = document.querySelectorAll(".navbar a");

    function loadContent(page) {
        switch (page) {
            case "generate":
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-key icon-header"></i>
                        <h1>Şifre Üret</h1>
                    </div>
                    <div class="info-box">
                        <p>Şifreler MAC adresi kullanılarak oluşturulmaktadır.</p>
                    </div>
                    <div class="form-box">
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
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-file-alt"></i>
                        <h1>Sayfa 1</h1>
                    </div>
                    <p>Düzenlenecek.</p>
                `;
                break;

            case "page2":
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-file-alt"></i>
                        <h1>Sayfa 2</h1>
                    </div>
                    <p>Düzenlenecek.</p>
                `;
                break;

            case "page3":
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-file-alt"></i>
                        <h1>Sayfa 3</h1>
                    </div>
                    <p>Düzenlenecek.</p>
                `;
                break;

            default:
                content.innerHTML = `<h1>Sayfa Bulunamadı</h1>`;
        }

        // Aktif sekmeyi güncelle
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`#nav${page.charAt(0).toUpperCase() + page.slice(1)}`).classList.add("active");
    }

    loadContent("generate");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            loadContent(this.id.replace("nav", "").toLowerCase());
        });
    });
});
