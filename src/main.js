import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";
import TodoCart from "@/components/TodoCart";
import TodoList from "@/components/TodoList";
import {createPinia} from "pinia";

const app = createApp(App);

const pinia = createPinia();
app.use(router);
app.use(pinia);

app.component("todo-list", TodoList);
app.component("todo-card", TodoCart);

app.mount("#app");
