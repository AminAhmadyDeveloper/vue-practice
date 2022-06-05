<script setup lang="ts">
import counterStore from "@store/counterStore";
</script>

<template>
  <div class="body">
    <h1 class="bouncing-header">Vite & Vue & WindiCSS</h1>
    <p class="text-lg text-gray-400">The Best Vite Vue Starter Project.</p>
    <div class="flex items-center justify-evenly">
      <h2 class="text-2xl text-white">Count is : {{ counterStore().count }}</h2>
      <p class="text-white mx-2">||</p>
      <p class="text-sm text-gray-400">
        Count Double is : {{ counterStore().double }}
      </p>
    </div>
    <div class="flex my-3 space-x-2">
      <button class="button" @click="counterStore().incerement">
        Incerement
      </button>
      <button class="button" @click="counterStore().decrement">
        Decrement
      </button>
    </div>
    <p class="text-sm text-gray-400">Powered by Pinia 🍍</p>
  </div>
</template>
