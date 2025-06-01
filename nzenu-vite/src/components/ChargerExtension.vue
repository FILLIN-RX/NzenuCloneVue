<template>
    <section id="domain">
      <div class="row" id="domainetable">
        <div class="flex justify-center items-center flex-col space-y-2">
          <h2 class="font-bold text-3xl">Notre sélection d'extensions</h2>
          <p class="w-1/3">
            Découvrez notre sélection d'extensions de domaine soigneusement choisies pour vous. Chaque domaine est
            disponible à partir de 8000 FCFA par an, garantissant une présence en ligne durable et professionnelle.
            Choisissez parmi une variété d'options telles que .com, .tech, .store et bien d'autres. Créez une identité
            numérique forte dès aujourd'hui.
          </p>
        </div>
        <div class="lg:flex justify-between items-center py-5 lg:px-40 lg:space-y-0 space-y-2">
          <div class="flex items-center space-x-2">
            <div class="border p-1 outline-none border-blue-900" >
              <input type="search"class="bg-transparent outline-none"  v-model="searchQuery" placeholder="Rechercher un domaine" />
            </div>
           
            <input id="buttonRecherche" class="bg-[#93F5F6] text-[#1045A5] font-bold py-1 px-3 hover:bg-white hover:border-blue-900 border" type="button" value="Search" @click="searchDomain" />
          </div>
          <div class="col-lg-6 col-sm-12  mmm">
            <button class="px-2 py-1 bg-[#93F5F6] text-[#1045A5] font-bold hover:bg-white border hover:border-blue-900"  id="buttonactualiser" @click="refresh">Actualiser</button>
          </div>
        </div>
      </div>
  
      <div class="flex justify-center lg:px-40">
        <div class="flex justify-center items-center w-full">

        
        <table class="w-full text-center space-y-5 text-lg" v-if="domains.length">
          <thead>
            <tr >
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr class="flex justify-between space-y-5 odd:bg-gray-200 px-10 items-center" v-for="(domain, index) in domains" :key="index">
              <td class="flex items-center">{{ domain.domain }}</td>
              <td>{{ domain.newPrice }}</td>
              <td class="line-through decoration-red-800">{{ domain.oldPrice }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  
      <div class="flex justify-center p-5">
        <button class="px-2 space-x-2 items-center py-1 bg-[#93F5F6] text-[#1045A5] font-bold flex justify-center hover:bg-white border hover:border-primary-900"  id="buttonExtension" @click="loadMoreExtensions">Charger plus d'extensions</button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const domains = ref([]);
  const searchQuery = ref('');
  
  // Load domain data from JSON file
  const loaddomaine = async () => {
    try {
      const response = await fetch('forfaits.json');
      const data = await response.json();
      domains.value = data; // Update the domains array with data
    } catch (error) {
      console.error("Error loading domain data:", error);
    }
  };
  
  // Search functionality (filter domains by search query)
  const searchDomain = () => {
    if (searchQuery.value) {
      domains.value = domains.value.filter(domain => domain.domain.toLowerCase().includes(searchQuery.value.toLowerCase()));
    } else {
      loaddomaine(); // Reload all domains if search query is cleared
    }
  };
  
  // Refresh functionality (reset search query and reload data)
  const refresh = () => {
    searchQuery.value = '';
    loaddomaine();
  };
  
  // Load more extensions (currently not implemented)
  const loadMoreExtensions = () => {
    console.log('Load more extensions clicked');
    // Add functionality to load more domains if needed
  };
  
  // Call loaddomaine on component mount
  onMounted(() => {
    loaddomaine();
  });
  </script>
  
  <style scoped>
  /* Add your styles for table, buttons, etc. */


  </style>
  