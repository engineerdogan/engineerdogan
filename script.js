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
            case "page3":
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-file-alt"></i>
                        <h1>${page === 'page1' ? 'Sayfa 1' : 'Sayfa 3'}</h1>
                    </div>
                    <p>Düzenlenecek</p>
                `;
                break;

            case "page2":
                content.innerHTML = `
                    <div class="content-header">
                        <i class="fas fa-file-alt"></i>
                        <h1>SAP</h1>
                    </div>
                    <div class="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>AD</th>
                                    <th>IP ADRESİ</th>
                                    <th>SUNUCU ADRESİ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td>A2L</td><td>192.168.90.6</td><td>a2l.servers.ngkutahya.com</td></tr>
                                <tr><td>2</td><td>A2T</td><td>192.168.90.9</td><td>a2t.servers.ngkutahya.com</td></tr>
                                <tr><td>3</td><td>A3L</td><td>192.168.90.20</td><td>a3l.servers.ngkutahya.com</td></tr>
                                <tr><td>4</td><td>A3T</td><td>192.168.90.8</td><td>a3t.servers.ngkutahya.com</td></tr>
                                <tr><td>5</td><td>B0L</td><td>192.168.90.5</td><td>b0l.servers.ngkutahya.com</td></tr>
                                <tr><td>6</td><td>B0T</td><td>192.168.90.4</td><td>b0t.servers.ngkutahya.com</td></tr>
                                <tr><td>7</td><td>B1L</td><td>192.168.90.10</td><td>b1l.servers.ngkutahya.com</td></tr>
                                <tr><td>8</td><td>B1T</td><td>192.168.90.11</td><td>b1t.servers.ngkutahya.com</td></tr>
                                <tr><td>9</td><td>01L</td><td>192.168.90.14</td><td>o1l.servers.ngkutahya.com</td></tr>
                                <tr><td>10</td><td>01T</td><td>192.168.90.13</td><td>o1t.servers.ngkutahya.com</td></tr>
                                <tr><td>11</td><td>PSL</td><td>192.168.90.12</td><td>psl.servers.ngkutahya.com</td></tr>
                                <tr><td>12</td><td>PST</td><td>172.16.100.16</td><td>pst.servers.ngkutahya.com</td></tr>
                            </tbody>
                        </table>
                    </div>
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
