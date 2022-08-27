import {defineStore} from 'pinia';
import {supabase} from "../supabase";

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }), getters: {
        userData(state) {
            return state.user
        },
    }, actions: {
        async authUser() {
            const user = supabase.auth.user()
            this.user = user;
            return user;
        }, async signIn(payload) {
            const {user} = await supabase.auth.signIn({
                email: payload.email, password: payload.password,
            });
            if (user) {
                this.user = user;
                return true;
            }
            return false;
        }, async signUp(payload) {
            const {user} = await supabase.auth.signUp({
                email: payload.email, password: payload.password,
            });
            if (user) {
                this.user = user;
                return true;
            }
            return false;
        }, async signOut() {
            const {error} = await supabase.auth.signOut();
            if (!error) {
                this.user = null;
                return true
            }
            return false
        },
    },
})
