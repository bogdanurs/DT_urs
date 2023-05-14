let app = new Vue({
  el: "#app",
  data() {
    return {
      message: "",
      message1: "",
      number: 0,
    };
  },
  methods: {
    process: function () {
      console.log(this.message);
      if (this.message === "123") {
        this.message1 = "Mesajul este egal cu 123";
      }
    },
    increment: function () {
      console.log(this.number);
      this.number--;
    },
    decrement: function () {
      this.number++;
    },
  },
});
