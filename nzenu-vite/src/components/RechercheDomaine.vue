<template>
    <div class="research" :style="{ background: backgroundColor }">
      <h1 :style="{color:color}">{{ rechercher }}</h1>
      <div class="coll">
        <button>WWW</button>
        <input type="text" placeholder="Search..." v-model="searchQuery" />
        <button @click="search">Search</button>
      </div>
    </div>
  </template>
  


<script>
    export default {
        name: 'RechercheDomaine',
        props: {
            rechercher: {
                type: String,
                default: 'Recherche de domaine'
            },
            backgroundColor: {
                type: String,
                default: 'oklch(0.359 0.144 278.697)'
            },
            color: {
                type: String,
                default: 'white'
            },
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


<style>

.research{
    color: white;
    height: 9rem;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    & button{
        background-color: aqua;
        margin: 0;
        border: 2px solid aqua;
        font-weight: 500;
        height: 30px;
        width: 30%;
        
    }
    & input{
        padding: 2px;
        border: none;
        width: 40%;
        border: 1px solid rgba(206, 201, 201, 0.596);

    }

}
@media (min-width:999px) {
  .research{
    padding: 1% 10%;
  }
  
}




</style>