document.addEventListener("DOMContentLoaded", async () => {

    // LOAD HEADER
    const header = document.getElementById("header");

    if (header) {

        const headerResponse = await fetch("../includes/header.html");

        const headerHtml = await headerResponse.text();

        header.innerHTML = headerHtml;

        // MENU TOGGLE
        const menuToggle = document.getElementById("menuToggle");

        if (menuToggle) {
            menuToggle.addEventListener("click", () => {
                document.querySelector(".main-nav").classList.toggle("show");
            });
        }

         initNavigation();
    }

    // LOAD FOOTER
    const footer = document.getElementById("footer");

    if (footer) {

        const footerResponse = await fetch("../includes/footer.html");

        const footerHtml = await footerResponse.text();

        footer.innerHTML = footerHtml;
    }

    // ACTIVE NAVIGATION
     function initNavigation() {

        let currentPage = window.location.pathname.split("/").pop();

        if (!currentPage) currentPage = "home.html";

        // reset ALL states
        $(".main-nav a, .mobile-nav a").removeClass("active");

        // re-apply active state
        $(".main-nav a, .mobile-nav a").each(function () {

            let link = $(this).attr("href").split("/").pop();

            if (link === currentPage) {
                $(this).addClass("active");
            }
        });
    }
});