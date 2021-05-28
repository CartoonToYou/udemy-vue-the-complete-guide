import Vue from "vue";
import App from "./App.vue";

Vue.directive("highlight", {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = "green";

    /* binding.value => (value after equal sign) */
    // el.style.backgroundColor = binding.value;

    var delay = 0;
    /* binding.modifiers => (text after dot notation of binding.arg) */
    if (binding.modifiers["delayed"]) {
      delay = 3000;
    }
    setTimeout(() => {
      /* binding.arg => (text after colon of this directives) */
      if (binding.arg == "background") {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  },
});

Vue.filter("to-lowercase", function (value) {
  return value.toLowerCase();
});

new Vue({
  el: "#app",
  render: (h) => h(App),
});
