import { defineStore } from 'pinia'

export const useTasksStore = defineStore('todos', {
    state: () => ({
        todos: [],
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
    },
    actions: {
        // any amount of arguments, return a promise or not
        addTodo(text) {
            // you can directly mutate the state
            this.todos.push({ text, id: this.nextId++, status: 'todo' })
        },
    },
})
