import { createApp } from "vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import App from "./app.vue";
import AuthLayout from "./layout/auth.vue";
import AppLayout from "./layout/app.vue";

loadFonts();

let app = createApp(App);

app.component("AuthLayout", AuthLayout);
app.component("AppLayout", AppLayout);

app.use(router).use(store).use(vuetify).mount("#app");
