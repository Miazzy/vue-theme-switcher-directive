import { createApp } from "vue";
import App from "./App";
import VueThemeSwitcherDirective from "../src";

const app = createApp(App);

app.use(VueThemeSwitcherDirective, {
  themes: ["light", "dark"],
  theme: "light",
});

app.mount("#app");
