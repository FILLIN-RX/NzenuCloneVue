<template>
    <div class="row" id="forfait">
      <ForfaitCard
        v-for="(forfait, index) in forfaits"
        :key="index"
        :forfait="forfait"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import ForfaitCard from './ForfaitCard.vue'
  
  const forfaits = ref([])
  
  onMounted(async () => {
    const response = await fetch('/forfaitPrix.json')
    forfaits.value = await response.json()
  })
  </script>
  
  <style scoped>
  #forfait {
    background-color: #d1d5db;
  }
  </style>
  