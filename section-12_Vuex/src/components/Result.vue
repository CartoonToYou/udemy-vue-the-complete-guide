<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

/* mutations use commit('functionName') */
/* actions use dispatch('functionName') */

export default {
  methods: {
    // ...mapActions(["asyncIncrement", "asyncDecrement"]),
    /* default form of actions */
    // increment(by) {
    //   this.$store.dispatch("increment", by);
    // },
    ...mapGetters({
      counter: types.DOUBLE_COUNTER,
    }),
  },
};
</script>
