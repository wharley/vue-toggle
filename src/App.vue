<template>
  <Toggle>
    <div>{{ isOn ? "😁" : "😔" }}</div>
  </Toggle>
</template>

<script>
import Toggle from "@/components/Toggle.vue";
import { store } from "@/store";

export default {
  name: "App",
  components: {
    Toggle
  },
  computed: {
    isOn() {
      return store.isOn;
    }
  }
};
</script>
