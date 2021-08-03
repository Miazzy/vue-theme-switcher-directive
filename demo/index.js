import { createApp } from "vue";
import App from "./App";
import VueThemeSwitcherDirective from "../src";

const app = createApp(App);

app.use(VueThemeSwitcherDirective, {
  themes: ["light", "dark"],
  theme: localStorage.getItem("theme") || "light",
  afterChanged: (theme) => {
    localStorage.setItem("theme", theme);
  },
});

app.mount("#app");
