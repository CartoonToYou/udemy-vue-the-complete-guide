<template>
  <div class="row">
    <app-quote
      v-for="(quote, idx) in quotes"
      :key="idx"
      @click.native="deleteQuote(idx)"
    >
      {{ quote }}
    </app-quote>
  </div>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  components: {
    appQuote: Quote,
  },

  props: ["quotes"],

  methods: {
    deleteQuote(quoteIdx) {
      this.$emit("quoteDeleted", quoteIdx);
    },
  },
};
</script>

<style></style>
