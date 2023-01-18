import "./assets/styles/styles.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(VueGtag, {
  config: { id: "G-WSVLD0J42V" },
});

app.mount("#app");
