<template>
  <div>
    <p>The Stocks -Stock Component</p>
    <p>{{ name }}: {{ price }}</p>
    <input type="number" v-model="stocksQty" />
    <button @click="confirmBuyStocks">Buy!</button>
  </div>
</template>

<script>
export default {
  props: ["name", "price"],

  data() {
    return {
      stocksQty: 0,
    };
  },

  methods: {
    confirmBuyStocks() {
      this.$emit("buyStocks", this.stocksQty);
    },
  },
};
</script>
