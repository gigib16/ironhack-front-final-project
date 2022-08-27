import {defineStore} from 'pinia'
import {supabase} from "@/supabase";

export const useTasksStore = defineStore('todos', {
    state: () => ({
        todos: [], currentId: null,
    }), getters: {
        doneTodos(state) {
            // autocompletion! ✨
            return state.todos.filter((todo) => todo.status === 'done')
        }, ongoingTodos(state) {
            return state.todos.filter((todo) => todo.status === 'ongoing')
        }, todoTodos(state) {
            return state.todos.filter((todo) => todo.status === 'todo')
        }, dataDetail(state) {
            return state.todos.find((todo) => todo.id === state.currentId)
        },
    }, actions: {
        updateCurrentId(payload) {
            console.log(payload)
            this.currentId = payload
        }, async updateStatus(payload) {
            const {data} = await supabase.from('tasks')
                .update({status: payload.status})
                .match({id: payload.id, user_id: payload.user_id})
            if(data){
                await this.getTodoSync(payload.user_id)
            }
        }, async addTodo(payload) {
            const {data} = await supabase.from('tasks').insert({...payload, status: 'todo'})
            if(data){
                this.getTodoSync(payload.user_id);
            }
        }, async editTodo(payload) {
            console.log(payload)
            const {data} = await supabase.from('tasks')
                .update({name: payload.name, description: payload.description})
                .match({id: payload.id, user_id: payload.user_id})
            if(data){
                await this.getTodoSync(payload.user_id)
            }
            this.currentId = null;
        }, async deleteTodo(payload1, payload2) {
            const {data} = await supabase.from('tasks')
                .delete()
                .match({id: payload1, user_id: payload2})
            if(data){
                await this.getTodoSync(payload2)
            }
            this.currentId = null;
        }, async getTodoSync(user_id) {
            const {data: tasks} = await supabase
                .from("tasks")
                .select("*")
                .eq('user_id', user_id)
                .order("id", {ascending: true});
            this.todos = tasks;
        },
    },
})
