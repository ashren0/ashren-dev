const setTheme = (theme) => {
  switch (theme) {
    case "light":
      document.documentElement.classList.add("light");
      document.getElementById("icon-sun").style.display = "none";
      document.getElementById("icon-moon").style.display = "block";
      localStorage.setItem("theme", "light");
      break;

    case "dark":
      document.documentElement.classList.remove("light");
      document.getElementById("icon-sun").style.display = "block";
      document.getElementById("icon-moon").style.display = "none";
      localStorage.setItem("theme", "dark");
      break;
  }
};

setTheme(localStorage?.getItem("theme") || "dark");

document.getElementById("theme-toggle").addEventListener("click", () => {
  setTheme(document.documentElement.classList.contains("light") ? "dark" : "light");
});
