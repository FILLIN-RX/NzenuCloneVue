<template>
   <NavBar v-if="$route.meta.showNavbarAndFooter !== false" />
  
  <router-view :key="$route.fullPath" />


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





</style>
