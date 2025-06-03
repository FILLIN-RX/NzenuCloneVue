<template>
    <div class="lg:grid grid-cols-4 gap-5 bg-gray-100 lg:px-40 pt-20 " id="forfait">
      <ForfaitCard
        v-for="(forfait, index) in forfaits"
        :key="index"
        :forfait="forfait"
      />
      
    </div>
    <p>* Seuleument les noms de domaine (.com , .cm) sont inclus</p>

  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import ForfaitCard from './ForfaitCard.vue'
  
  const forfaits = ref([])
  
  onMounted(async () => {
    const response = await fetch('forfaitssl.json')
    forfaits.value = await response.json()
  })
  </script>
  
  <style scoped>
 




  
  </style>
  