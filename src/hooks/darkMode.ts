import { isServer } from "./isServer";

export default function darkMode() {
  if (isServer()) {
    return;
  }
  if (!localStorage.getItem("theme")) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "light");
    return;
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "dark");
    return;
  }
}
