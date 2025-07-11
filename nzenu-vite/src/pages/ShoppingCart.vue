<!-- Cart.vue -->
<template>
  <div class="flex justify-center pt-20">
    <div
      class="p-4 h-screen w-2/3 items-center text-center bg-white rounded shadow max-w-md"
    >
      <h2 class="text-xl font-bold mb-4">🛒 Panier</h2>
      <ul v-if="cart.items.length > 0" class="space-y-2">
        <li
          v-for="(item, index) in cart.items"
          :key="index"
          class="flex justify-between"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.prix }} FCFA</span>
        </li>
      </ul>
      <p v-else>Aucun produit dans le panier</p>
      <div v-if="cart.items.length > 0" class="mt-4 font-semibold">
        Total : {{ cart.total }} FCFA
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "../stores/panier";

const cart = useCartStore();
</script>
