<template>
  <EntetePages
    :titre="titre"
    :donnee="donnee"
    :photo="photo"
    backgroundColor="black"
  />
  <ChargerForfiat />
</template>

<script setup>
import EntetePages from "@/components/EntetePages.vue";
import ChargerForfiat from "../components/ChargerForfiat.vue";

const titre = "Le meilleur plan d’hébergement web pour votre site internet";
const donnee =
  "Profitez de toutes les fonctionnalités, outils et conseils nécessaires pour réaliser vos projets web. L’hébergement mutualisé NzenuHost vous offre un service de qualité, performant et adapté à vos projets. Besoin d’un site web personnel, institutionnel ou marchand ? Choisissez l’offre qui correspond le mieux à votre projet.";
import photo from "@/assets/image (8).jpeg";
</script>

<style scoped>
.mutualiser {
  background-color: #e5e7eb;
}
</style>
