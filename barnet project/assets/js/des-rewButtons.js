const btnActive = document.querySelectorAll(".nav-link");
const contents = document.querySelectorAll(".tab-pane");

btnActive.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        contents.forEach((content) => {
            content.classList.remove("active");
        });
        btnActive.forEach((tab) => {
            tab.classList.remove("active");
        });
        contents[index].classList.add("active");
        btnActive[index].classList.add("active");
    });
});