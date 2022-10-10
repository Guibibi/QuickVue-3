import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n, useI18n } from 'petite-vue-i18n'

import App from "./App.vue"
import router from "./router";

import "./assets/main.css";

const i18n = createI18n({
    locale: 'fr',
    messages: {
        en: {
            'welcome': 'Welcome.'
        },
        fr: {
            'welcome': 'Bienvenue.'
        }
    }
})

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.mount("#app");
