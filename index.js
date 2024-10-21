const btn = document.getElementById("action-btn");
const universe = document.getElementById("universe");

btn.addEventListener("click", () => {
    btn.classList.add("hidden-btn");
    universe.classList.remove("hidden");
})