<template>
  <div v-theme:page>
    <h2 v-theme:title>Vue theme switcher directive</h2>
    <div>
      <button
        v-if="theme.value === 'dark'"
        v-theme-switcher:light
        class="button_theme_dark"
      >
        Switch to light theme
      </button>
      <button v-else v-theme-switcher:dark class="button_theme_light">
        Switch to dark theme
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
}

button {
  margin: 0 10px;
  padding: 10px 15px;
  font-family: Bahnschrift, serif;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
}

.button_theme_light {
  color: #ffffff;
  background: #3eaf7c;
}

.button_theme_dark {
  color: #000000;
  background: #ffffff;
}

.page_theme_default {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title_theme_default {
  font-family: "Balsamiq Sans", serif;
}

.page_theme_light {
  background: #f2f2f2;
}

.page_theme_dark {
  background: #1c1c1c;
}

.title_theme_light {
  color: #3eaf7c;
}

.title_theme_dark {
  color: #ffffff;
}
</style>
