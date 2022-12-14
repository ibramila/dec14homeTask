const loader = document.querySelector(".spinner-grow");

window.addEventListener("load", () => {
    loader.style.display = "block";
});
window.addEventListener('unload', () => {
    loader.style.display = "none";
});
