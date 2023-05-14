function users() {
  get = function () {
    return axios.get("http://localhost:3000/users");
  };

  add = function (user) {
    return axios.put("https://localhost:3000/users", user);
  };

  remove = function (index) {
    return axios.delete(`https://localhost:3000/users/${index}`);
  };

  update = function (index, user) {
    return axios.post(`https://localhost:3000/users/${index}`, user);
  };

  return {
    get: get,
    add: add,
    remove: remove,
    update: update,
  };
}
