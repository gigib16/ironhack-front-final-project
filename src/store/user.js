import {defineStore} from 'pinia';
import {supabase} from "../supabase";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
    }), getters: {
        user(state) {
            return state.user
        },
    }, actions: {
        async signIn(payload) {
            console.log(payload)
            const {user, error} = await supabase.auth.signIn({
                email: payload.email, password: payload.password,
            });
            console.log(user, error)
        },
        async signUp(payload) {
            const {user, error} = await supabase.auth.signUp({
                email: payload.email, password: payload.password,
            });
            console.log(user, error)
        },
    },
})
