import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n, useI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

import en from "./locales/en.yaml";
import fr from "./locales/fr.yaml";

const i18n = createI18n({
  locale: "fr",
  messages: {
    en,
    fr,
  },
});
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
