import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import store from "../store/index";
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from) => {
  store.commit('increment')
  console.log(to, store.state.count);
});
export default router;
