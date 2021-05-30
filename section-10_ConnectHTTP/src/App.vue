<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input class="form-control" type="text" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input class="form-control" type="text" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input class="form-control" type="text" v-model="node" />
        <br /><br />
        <button class="btn btn-primary" @click="fetchData">Get Date</button>
        <br /><br />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in users">
            {{ user.username }} - {{ user.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
      resource: {},
      node: "data",
    };
  },

  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "alternative.json" },
      getData: { method: "GET" },
    };
    this.resource = this.$resource("{node}.json", {}, customActions);
  },

  methods: {
    submit() {
      // this.$http.post("data.json", this.user).then(
      //   (response) => {
      //     console.log(response);
      //   },
      //   (error) => {
      //     console.error(error);
      //   }
      // );
      // this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    fetchData() {
      // this.$http
      //   .get("data.json")
      //   .then((response) => {
      //     const data = response.json();
      //     return data;
      //   })
      //   .then((usersData) => {
      //     const usersArray = [];
      //     for (let key in usersData) {
      //       usersArray.push(usersData[key]);
      //     }
      //     this.users = usersArray;
      //   });
      this.resource.getData({ node: this.node }).then((usersData) => {
        const usersArray = [];
        for (let key in usersData) {
          usersArray.push(usersData[key]);
        }
        this.users = usersArray;
      });
    },
  },
};
</script>

<style></style>
