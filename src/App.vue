<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { setCssVar } from "quasar";

setCssVar("primary", "#D75DDB");

export default defineComponent({
  name: "App",
});
</script>
