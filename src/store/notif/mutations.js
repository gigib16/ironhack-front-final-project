export default {
  addNotif(state, payload) {
    const response = {};
    if (state.notif.length === 0) {
      response.id = 1;
    } else {
      response.id = state.notif[state.notif.length-1].id + 1;
    }
    response.class = payload.class;
    response.message = payload.message;
    state.notif.push(response);
  },
  removeNotif(state, payload) {
    const index = state.notif.filter((x) => {
      return x.id !== payload.id;
    });
    state.notif = index;
  },
};
