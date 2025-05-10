<template>
   <NavBar v-if="$route.meta.showNavbarAndFooter !== false" />
  <transition name="fade">
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}


</style>
