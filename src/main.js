import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";
// import store from "./store/index.js";
import axios from 'axios';
import VueAxios from 'vue-axios';
import TodoCart from "@/components/TodoCart";
import TodoList from "@/components/TodoList";

const app = createApp(App);

app.use(router);
// app.use(store);
app.use(VueAxios, axios);

app.component("todo-list", TodoList);
app.component("todo-card", TodoCart);

app.mount("#app");
