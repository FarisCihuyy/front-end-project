const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.classList.add("dark-mode");
}

const toggleBtnTheme = document.querySelector("#toggle-theme");
toggleBtnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
