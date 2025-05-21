const btn = document.getElementById("action-btn");
const universe = document.getElementById("universe");
const year = document.getElementById("year");

const currentYear = new Date().getFullYear();
year.textContent = currentYear;

btn.addEventListener("click", () => {
    btn.classList.add("hidden-btn");
    universe.classList.remove("hidden");
})