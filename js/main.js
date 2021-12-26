const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem: function () {
      // 空文字の場合は処理を抜ける
      if (this.newItem === "") return;
      let todo = {
        item: this.newItem,
        isDone: false,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
    removeItem: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
app.mount("#app");
