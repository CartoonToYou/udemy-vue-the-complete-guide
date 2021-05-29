<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Filters & Mixins</h1>
      <!-- prettier-ignore -->
      <p>{{ text | toUppercase | to-lowercase }}</p>
      <hr />
      <button @click="fruits.push('Berries')">Add New Item</button>
      <input v-model="filterText" />
      <ul>
        <li v-for="fruit in filteredFruits">{{ fruit }}</li>
      </ul>
      <hr />
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  components: {
    appList: List,
  },

  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },

  mixins: [fruitMixin],

  data() {
    return {
      text: "Hello There!",
    };
  },
};
</script>

<style></style>
