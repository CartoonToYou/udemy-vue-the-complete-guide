<template>
  <div>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ by: 50, duration: 500 })"
    >
      Increment
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 50, duration: 500 })"
    >
      Decrement
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

/* mutations use commit('functionName') */
/* actions use dispatch('functionName') */

export default {
  methods: {
    ...mapActions(["asyncIncrement", "asyncDecrement"]),
    /* default form of actions */
    // increment(by) {
    //   this.$store.dispatch("increment", by);
    // },
  },
};
</script>
