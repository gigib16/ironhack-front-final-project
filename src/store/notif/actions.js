export default {
  addNotif(context, payload) {
    context.commit("addNotif", payload);
  },
  removeNotif(context, payload) {
    context.commit("removeNotif", payload);
  },
};
