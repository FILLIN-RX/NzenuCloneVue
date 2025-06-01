<template>
    <div class="text-white h-30 flex flex-col justify-center items-center space-y-5" :style="{ background: backgroundColor }">
        <div class="px-4 sm:px-6 lg:px-8 max-w-7xl sm:w-2/3 mx-auto space-y-2">

        
      <h1 :style="{color:color}">{{ rechercher }}</h1>
      <div class="coll w-full border flex justify-stretch">
        <button class="bg-blue-200 py-3 lg:px-5 px-2 lg:text-xl font-bold text-blue-900">WWW</button>
        <input class=" border py-3 px-1 lg:px-3 text-gray-600  outline-none w-100 bg-white" type="text" placeholder="par exemple(votreentreprise.com,cm,tech,ia,co,org,....)" v-model="searchQuery" />
        <button class="outline-none lg:px-5 py-3 px-2 lg:text-xl bg-blue-200 font-bold  text-blue-900 font-bold" @click="search">Search</button>
      </div>
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
        background-color: #93F5F6;
        margin: 0;
        border: 2px solid #93F5F6;
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
    padding: 1% 15%;
  }
  
}




</style>