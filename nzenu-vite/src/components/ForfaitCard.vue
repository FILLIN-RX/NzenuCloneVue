<template>
  <div
    class="border shadow bg-white flex flex-col justify-between pb-2 rounded-lg hover:drop-shadow-2xl"
  >
    <div
      class="bg-blue-950 rounded-t-lg text-white font-medium text-center h-72 flex flex-col justify-center items-center p-4 space-y-2"
    >
      <h5 class="font-medium lg:text-3xl text-2xl capitalize">
        {{ forfait.name }}
      </h5>
      <p class="space-y-4">{{ forfait.content }}</p>
      <h5 class="text-xl">
        {{ forfait.prix }} <span class="text-sm">FCFA/an</span>
      </h5>
    </div>
    <div class="forfait-bottom">
      <ul class="attribute-list" @mouseleave="handleMouseLeave">
        <li
          v-for="(attr, index) in displayedAttributes"
          :key="index"
          class="flex odd:bg-gray-300 space-x-2 items-center p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon"
            viewBox="0 0 24 24"
            width="1em"
            height="1em"
          >
            <path
              fill="currentColor"
              d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
            />
          </svg>
          {{ attr }}
        </li>
      </ul>
      <div class="flex justify-center items-center p-2">
        <button @click="commander"
          class="bg-[#93F5F6] btn-commander text-[#1045A5] font-bold py-1 px-3 hover:bg-white hover:border-blue-900 border-white border"
          
        >
          Commander
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "../stores/panier";
const cartStore = useCartStore();
const props = defineProps({
  forfait: Object,
});

const isExpanded = ref(false);
const displayedAttributes = computed(() => {
  if (!props.forfait || !props.forfait.atribute) return [];
  return isExpanded.value
    ? props.forfait.atribute
    : props.forfait.atribute.slice(0, 12);
});
function commander() {
  cartStore.addItem(props.forfait)
  alert(`✅ ${props.forfait.name} a été ajouté au panier !`)
  console.log(cartStore.items)
}
function handleMouseLeave() {
  setTimeout(() => {
    if (
      !document.querySelector(".attribute-list:hover") &&
      !document.querySelector(".btn-commander:hover")
    ) {
      isExpanded.value = false;
    }
  }, 200);
}
</script>

<style scoped></style>
