<template>
  <div class="container">
    <router-view name="header"></router-view>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide" mode="out-in"
          ><router-view></router-view
        ></transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("initStocks");
  },
};
</script>

<style>
body {
  padding: 30px;
}

.slide-enter-active {
  animation: slide-in 0.2s ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 0.2s ease-out forwards;
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
}
</style>
