document.addEventListener("DOMContentLoaded", () => {
    const title = document.getElementById("title");
    title.addEventListener("mouseover", () => {
        title.style.color = "blue";
    });
    title.addEventListener("mouseout", () => {
        title.style.color = "black";
    });
});