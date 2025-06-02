<template>
    <div class="lg:grid grid-cols-4 gap-5 bg-gray-100 " id="forfait">
      <ForfaitCard
        v-for="(forfait, index) in forfaits"
        :key="index"
        :forfait="forfait"
        
      />
      
    </div>
    <p class="lg:grid grid-cols-1 gap-5 lg:px-40 font-bold text-xs italic bg-gray-100 py-5">* Seuleument les noms de domaine (.com , .cm) sont inclus</p>
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
  