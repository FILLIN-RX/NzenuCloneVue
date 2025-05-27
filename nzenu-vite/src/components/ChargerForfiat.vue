<template>
    <div class="lg:grid grid-cols-4 gap-5 " id="forfait">
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


  @media (max-width: 576px) {
    #forfait{
    padding: 1% 5%;
  }
  }

  @media (min-width:999px) {
  #forfait{
    padding: 1% 15%;
  }
  
}
  </style>
  