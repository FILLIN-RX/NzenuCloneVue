// stores/cart.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] // Chaque item : { id, nom, prix, quantite }
  }),

  actions: {
    // Étape 1 : Ajouter un produit
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantite += 1;
      } else {
        this.items.push({ ...item, quantite: 1 });
      }
    },

    // Étape 2 : Retirer un produit (complètement)
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id);
    },

    // Étape 3 : Réduire la quantité d’un produit
    decreaseQuantity(id) {
      const item = this.items.find(i => i.id === id);
      if (item && item.quantite > 1) {
        item.quantite -= 1;
      } else {
        this.removeItem(id); // si quantite = 1 → supprimer l'item
      }
    },

    // Étape 4 : Vider tout le panier
    clearCart() {
      this.items = [];
    }
  },

  getters: {
    // Étape 5 : Total des articles
    total() {
      return this.items.reduce((acc, item) => acc + item.prix * item.quantite, 0);
    },

    // Étape 6 : Nombre total d'articles
    itemCount() {
      return this.items.reduce((acc, item) => acc + item.quantite, 0);
    }
  }
});
