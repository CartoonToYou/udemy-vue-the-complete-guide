<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some Text'"></p>
        <p v-html="'<strong>Some strong text</strong>'"></p>
      </div>
    </div>

    <hr />

    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight:background.delayed="'red'">Color this</p>
        <p
          v-local-highlight:background.delayed.blink="{
            mainColor: 'red',
            secondColor: 'green',
            delay: 500,
          }"
        >
          Color this, too
        </p>
      </div>
    </div>

    <app-filter-and-mixins></app-filter-and-mixins>
  </div>
</template>

<script>
import FilterAndMixins from "./FilterAndMixins.vue";

export default {
  components: {
    "app-filter-and-mixins": FilterAndMixins,
  },

  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        /* binding.value => (value after equal sign) */
        // el.style.backgroundColor = binding.value;

        var delay = 0;
        /* binding.modifiers => (text after dot notation of binding.arg) */
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              /* binding.arg => (text after colon of this directives) */
              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            /* binding.arg => (text after colon of this directives) */
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value.mainColor;
            } else {
              el.style.color = binding.value.mainColor;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
