

<template>
  <div class="research">
    <h1>{{ rechercher }}</h1>
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


<style>

.research{
    background:oklch(0.359 0.144 278.697);
    color: white;
    height: 9rem;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    & button{
        background-color: aqua;
        margin: 0;
        border: 1px solid aqua;
        font-weight: 500;
        height: 30px;
        width: 20%;
    }
    & input{
        padding: 3px;
        border: none;
        width: 30%;

    }

}




</style>