<template>
   <NavBar v-if="$route.meta.showNavbarAndFooter !== false"  />

  
                    <router-view :key="$route.fullPath" class="transition-content" />
               


  <WhatzappButton />
  <FooTer v-if="$route.meta.showNavbarAndFooter !== false" />
</template>

<script>

import NavBar from './components/NavBar.vue'
import FooTer from './components/FooterServiceClient.vue'
import WhatzappButton from './components/WhatzappButton.vue'

export default {
  name: 'App',
  components: {
    
    NavBar,
    FooTer,
    WhatzappButton,
  }
}
</script>

<style >
@import "tailwindcss";

/* Transition optimisée pour le contenu uniquement */
.ultra-smooth-enter-active {
  transition: all 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) 0.1s;
  will-change: transform, opacity;
  position: absolute; /* Empêche le décalage des éléments fixes */
  width: 100%;
}

.ultra-smooth-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  will-change: transform, opacity;
  position: absolute; /* Empêche le décalage des éléments fixes */
  width: 100%;
}

.ultra-smooth-enter-from {
  opacity: 0;
  transform: translateY(12px) scale(0.98);
}

.ultra-smooth-leave-to {
  opacity: 0;
  transform: translateY(-12px) scale(1.02);
}

.transition-content {
  width: 100%;
}


</style>
