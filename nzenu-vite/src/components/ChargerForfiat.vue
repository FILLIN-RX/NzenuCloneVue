<template>
    <div class="row" id="forfait">
      <ForfaitCard
        v-for="(forfait, index) in forfaits"
        :key="index"
        :forfait="forfait"
      />
      <p>* Seuleument les noms de domaine (.com , .cm) sont inclus</p>
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
    & p{
      text-align: start;
    }
  }




  @media (min-width:999px) {
  #forfait{
    padding: 1% 10%;
  }
  
}
  </style>
  