import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
// import variables from "./assets/styles/variables.scss"
const app = createApp(App);
app.use(router).use(store).use(ElementPlus);
app.mount("#app");
// createApp(App).use(router).use(store).use(ElementPlus).mount("#app");
