import { defineStore } from 'pinia'

export const useTasksStore = defineStore('todos', {
    state: () => ({
        todos: [],
        currentId: null,
    }),
    getters: {
        doneTodos(state) {
            // autocompletion! ✨
            return state.todos.filter((todo) => todo.status === 'done')
        },
        ongoingTodos(state) {
            return state.todos.filter((todo) => todo.status === 'ongoing')
        },
        todoTodos(state) {
            return state.todos.filter((todo) => todo.status === 'todo')
        },
        dataDetail(state) {
            return state.todos.find((todo) => todo.id === state.currentId)
        },
    },
    actions: {
        updateCurrentId(payload) {
            console.log(payload)
            this.currentId = payload
        },
        updateStatus(payload) {
            const idx = this.todos.findIndex(data => data.id === payload.id);
            this.todos[idx].status = payload.status;
        },
        addTodo(payload) {
            let id = 1;
            if(this.todos.length > 0){
                id = this.todos[this.todos.length - 1].id ++;
            }
            this.todos.push({ ...payload, id: id, status: 'todo' })
        },
        editTodo(payload) {
            const idx = this.todos.findIndex(data => data.id === payload.id);
            this.todos[idx].name = payload.name;
            this.todos[idx].description = payload.description;
            this.currentId = null;
        },
        deleteTodo(payload) {
            this.todos = this.todos.filter(data => data.id !== payload);
        },
    },
})
