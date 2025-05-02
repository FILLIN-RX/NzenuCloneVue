<template>
  <EntetePages :titre="titre" :donnee="donnee" :photo="photo"/>
</template>

<script setup>
  import EntetePages from '@/components/EntetePages.vue';
  
  // Correct way to import an image in Vue
  import photo from '@/assets/image (15).jpeg';

  const titre = "Réalisez Votre Identité en Ligne";
  const donnee = "Donnez vie à votre projet en ligne avec un nom de domaine unique. L'enregistrement de domaine chez NzenuHost est le premier pas pour créer votre présence digitale distinctive. Ne manquez pas l'opportunité de sécuriser votre identité en ligne dès aujourd'hui !";
</script>

<style scoped>
</style>
