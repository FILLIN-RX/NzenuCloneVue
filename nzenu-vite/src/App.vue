<template>
   <NavBar v-if="$route.meta.showNavbarAndFooter !== false"  />
  
   <transition name="delayed-fade" appear>
                    <router-view :key="$route.fullPath" />
                </transition>


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

.delayed-fade-enter-active {
    transition: opacity 0.6s ease 0.3s;
}

.delayed-fade-enter-from {
    opacity: 0;
}



</style>
