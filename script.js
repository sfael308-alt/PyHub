const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        const aberto =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!aberto)
        );

        menu.classList.toggle("aberto", !aberto);

        menuToggle.setAttribute(
            "aria-label",
            aberto ? "Abrir menu" : "Fechar menu"
        );
    });

    // Fecha o menu quando um link é clicado
    menu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menu.classList.remove("aberto");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        });
    });

    // Fecha o menu ao pressionar Esc
    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape") {
            menu.classList.remove("aberto");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
        }
    });
}