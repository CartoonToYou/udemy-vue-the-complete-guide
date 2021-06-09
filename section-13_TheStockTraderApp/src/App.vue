<template>
  <div class="container">
    <router-view name="header"></router-view>
    <div class="row">
      <div class="col-xs-12"><router-view></router-view></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  padding: 30px;
}
</style>
