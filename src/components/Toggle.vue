<template>
  <div>
    <input class="toggle-input" type="checkbox">
    <button :class="['toggle-btn', isOn ? 'toggle-btn-on' : 'toggle-btn-off']" @click="setIsOn"></button>
    <slot></slot>
  </div>
</template>

<script>
import { store, mutations } from "@/store";

export default {
  name: "Toggle",
  computed: {
    isOn() {
      return store.isOn;
    }
  },
  methods: {
    setIsOn: mutations.setIsOn
  }
};
</script>

<style lang="css" scoped>
@import "../assets/styles/toggle.css";
</style>