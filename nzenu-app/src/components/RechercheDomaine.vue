

<template>
  <div>
    <h1>{{ rechercher }}</h1>

    <input type="text" placeholder="Search..." v-model="searchQuery" />
    <button @click="search">Search</button>
  </div>










</template>


<script>
    export default {
        name: 'RechercheDomaine',
        props: {
            rechercher: {
                type: String,
                default: 'Recherche de domaine'
            }
        },
        data() {
            return {
                searchQuery: ''
            };
        },
        methods: {
            search() {
                // Logique de recherche 
                console.log('Searching for:', this.searchQuery);
            }
        }
    }






</script>