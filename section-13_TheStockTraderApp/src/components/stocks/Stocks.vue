<template>
  <div class="row">
    <h1>The Stocks Component</h1>
    <div v-for="stock in stocks" :key="stock.id" class="col">
      <app-stock
        :name="stock.name"
        :price="stock.price"
        @buyStocks="getStocks"
      />
    </div>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  components: {
    appStock: Stock,
  },

  data() {
    return {
      stocks: [
        { id: 1, name: "BMW", price: 20 },
        {
          id: 2,
          name: "Google",
          price: 50,
        },
      ],
    };
  },

  methods: {
    getStocks(qty) {
      console.log(qty);
    },
  },
};
</script>
