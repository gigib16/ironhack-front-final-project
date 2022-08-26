import { createApp } from "vue";
import router from "./router.js";
import App from "./App.vue";
import axios from 'axios';
import VueAxios from 'vue-axios';
import TodoCart from "@/components/TodoCart";
import TodoList from "@/components/TodoList";
import {createPinia} from "pinia";

const app = createApp(App);

const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(VueAxios, axios);

import {useTasksStore} from "@/store/task";
const tasksStore = useTasksStore()
console.log(tasksStore)

app.component("todo-list", TodoList);
app.component("todo-card", TodoCart);

app.mount("#app");
