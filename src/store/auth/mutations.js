export default {
    setUser(state, payload){
        state.user = payload;
    },
    isAuthenticad(state, payload){
        state.isAuthenticated = payload;
    },
    isLoading(state, payload){
        state.isLoading = payload;
    },
};
