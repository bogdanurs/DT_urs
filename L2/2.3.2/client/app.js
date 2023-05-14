var app = new Vue({
  el: "#app",
  data: {
    users: [],
    usersService: null,
    editingIndex: -1,
    newUser: {
      name: "",
      city: "",
    },
    edituser: {
      name: "",
      city: "",
    },
  },
  created: function () {
    this.usersService = users();
    this.usersService.get().then((response) => (this.users = response.data));
  },
  methods: {
    addUser: function () {
      this.usersService.add(this.newUser).then((response) => {
        this.users.push(response.data);
        this.newUser.name = "";
        this.newUser.city = "";
      });
    },
    deleteUser: function (index) {
      this.usersService.delete(index).then((response) => {
        this.users.splice(index, 1);
      });
    },
    startEditUser: function (index) {
      let user = this.users[index];
      this.editingIndex = index;
      this.editUser.name = user.name;
      this.editUser.city = user.city;
    },
    saveEditUser: function () {
      let user = this.users[this.editingIndex];
      user.name = this.editUser.name;
      user.city = this.editUser.city;
      this.usersService.update(this.editingIndex, user).then((response) => {
        this.editingIndex = -1;
        this.editUser.name = "";
        this.editUser.city = "";
      });
    },
  },
});
