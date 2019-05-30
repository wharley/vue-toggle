import Vue from "vue";

export const store = Vue.observable({
  isOn: true
});

export const mutations = {
  setIsOn() {
    store.isOn = !store.isOn;
  }
};