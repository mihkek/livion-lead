<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { setCssVar } from "quasar";

setCssVar("primary", "#D75DDB");

export default defineComponent({
  name: "App",
  created() {
    this.noscriptHtml =
      '<noscript><div><img src="https://mc.yandex.ru/watch/93830259" style="position:absolute; left:-9999px;" alt="" /></div></noscript>';
  },
});
</script>
