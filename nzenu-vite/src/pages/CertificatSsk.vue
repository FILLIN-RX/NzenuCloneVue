<template>
    <div class="pt-15">

   
  <EntetePages :titre="titre" :donnee="donnee" :photo="photo" />
  <div></div>
  <ForfaitSsl />
    </div>
</template>

<script setup>
import EntetePages from "@/components/EntetePages.vue";
import ForfaitSsl from "../components/ForfaitSsl.vue";

const titre = "Certificat SSL";
const donnee =
  "Détenir un certificat SSL est aujourd’hui indispensable pour n’importe quel site internet. C’est pourquoi nous incluons gratuitement dans nos hébergements une protection initiale avec les certificats SSL Let’s Encrypt. Découvrez nos autres certificats professionnels et nos conseils pour faire votre choix.";
import photo from "@/assets/image__7_-removebg-preview (2).png";
</script>

<style scoped>
CardOption {
  min-height: 5rem;
  padding: 1rem; 
}

section {
  background-color: #d1d5db;
}
</style>
