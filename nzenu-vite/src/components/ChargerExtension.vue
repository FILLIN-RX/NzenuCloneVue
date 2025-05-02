<template>
    <section id="domain">
      <div class="row" id="domainetable">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <h5>Notre sélection d'extensions</h5>
          <p>
            Découvrez notre sélection d'extensions de domaine soigneusement choisies pour vous. Chaque domaine est
            disponible à partir de 8000 FCFA par an, garantissant une présence en ligne durable et professionnelle.
            Choisissez parmi une variété d'options telles que .com, .tech, .store et bien d'autres. Créez une identité
            numérique forte dès aujourd'hui.
          </p>
        </div>
        <div class="row">
          <div class="col-lg-4 col-sm-12">
            <input type="search" v-model="searchQuery" placeholder="Rechercher un domaine" />
            <input id="buttonRecherche" type="button" value="Search" @click="searchDomain" />
          </div>
          <div class="col-lg-4 col-sm-12">
            <button id="buttonactualiser" @click="refresh">Actualiser</button>
          </div>
        </div>
      </div>
  
      <div class="row justify-content-center" id="domaine">
        <table v-if="domains.length">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(domain, index) in domains" :key="index">
              <td>{{ domain.domain }}</td>
              <td>{{ domain.newPrice }}</td>
              <td class="old-price">{{ domain.oldPrice }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <div id="buttonExtensionContainer">
        <button id="buttonExtension" @click="loadMoreExtensions">Charger plus d'extensions</button>
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
  .old-price {
    text-decoration: line-through;
    color: grey;
  }
  </style>
  