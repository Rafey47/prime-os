const windows = document.querySelectorAll(".window");

windows.forEach((window) => {
    const titleBar = window.querySelector(".title-bar");
    const closeButton = window.querySelector(".close");

    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    titleBar.addEventListener("mousedown", (e) => {
        dragging = true;

        offsetX = e.clientX - window.offsetLeft;
        offsetY = e.clientY - window.offsetTop;

        window.style.zIndex = 10;
    });

    document.addEventListener("mousemove", (e) => {
        if (!dragging) return;

        window.style.left = `${e.clientX - offsetX}px`;
        window.style.top = `${e.clientY - offsetY}px`;
    });

    document.addEventListener("mouseup", () => {
        dragging = false;
    });

    closeButton.addEventListener("click", () => {
        window.style.display = "none";
    });
});

function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);