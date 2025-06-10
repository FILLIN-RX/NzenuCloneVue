<template>
  <div
    class="text-white h-30 flex flex-col justify-center items-center mb-5 space-y-5"
    :style="{ background: backgroundColor }"
  >
    <div class="px-4 sm:px-6 lg:px-40  lg:w-full mx-auto space-y-2">
      <h1 :style="{ color: color }">{{ rechercher }}</h1>
      <div class="w-full border flex ">
        <button
          class="bg-blue-200 py-3 lg:px-5 px-2 lg:text-xl w-[20%] font-bold text-blue-900"
        >
          WWW
        </button>
        <input
          class="border py-3 px-1 lg:px-3 text-gray-600 outline-none w-[60%] bg-white"
          type="text"
          placeholder="par exemple(votreentreprise.com,cm,tech,ia,co,org,....)"
          v-model="searchQuery"
        />
        <button
          class="outline-none lg:px-5 py-3 px-2 lg:text-xl bg-blue-200 w-[20%] font-bold text-blue-900 font-bold"
          @click="search"
        >
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RechercheDomaine",
  props: {
    rechercher: {
      type: String,
      default: "Recherche de domaine",
    },
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    search() {
      // Logique de recherche
      console.log("Searching for:", this.searchQuery);
    },
  },
};
</script>

<style>
.research {
  color: white;
  height: 9rem;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  & button {
    background-color: #93f5f6;
    margin: 0;
    border: 2px solid #93f5f6;
    font-weight: 500;
    height: 30px;
  }
  & input {
    padding: 2px;
    border: none;

    border: 1px solid rgba(206, 201, 201, 0.596);
  }
}
</style>
