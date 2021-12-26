const app = Vue.createApp({
  data: () => ({
    newItem: "",
    todos: [],
  }),
  methods: {
    addItem: function () {
      // 空文字の場合は処理を抜ける
      if (this.newItem === "") return;
      console.log("Clicked!");
      let todo = {
        item: this.newItem,
      };
      this.todos.push(todo);
      this.newItem = "";
    },
  },
});
app.mount("#app");
