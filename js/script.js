const nav = `
<ul class="nav-ul">
    <li class="nav-item">
        <a href="portifolio/" class="nav-link active">Home</a>
    </li>
    <li class="nav-item">
        <a href="portifolio/sobre.html" class="nav-link">Sobre</a>
    </li>
    <li class="nav-item">
        <a href="portifolio/projetos.html" class="nav-link">Projetos</a>
    </li>
    <li class="nav-item">
        <a href="#" class="nav-link">Contato</a>
    </li>
</ul>
`;

function renderNav() {
    const navEl = document.querySelector(".nav");
    if (navEl) {
        navEl.innerHTML = nav;

        document.querySelectorAll(".nav-link").forEach((el) => {
            const { pathname } = window.location;
            if (pathname !== el.getAttribute("href")) {
                return el.classList.remove("active");
            }

            return el.classList.add("active");
        });
    }
}

window.addEventListener("DOMContentLoaded", () => {
    renderNav();
});
