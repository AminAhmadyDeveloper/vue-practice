import { defineStore } from "pinia";

const counterStore = defineStore("counterStore", {
  state() {
    return {
      count: 0,
    };
  },
  actions: {
    incerement(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
  getters: {
    double(): number {
      return this.count * 2;
    },
  },
  persist: true,
});

export default counterStore;
