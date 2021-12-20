import { createApp } from "vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import App from "./app.vue";

loadFonts();

createApp(App).use(router).use(store).use(vuetify).mount("#app");
