

<template>
  <div class=" p-3 space-y-2 h-full">
    <div class="flex space-x-3">
      <div class="col-1 icon " v-html="icon"></div> <!-- Injection du SVG -->
      <div class="col title font-bold  mb-1">{{ title }}</div>
    </div>
    
    <p class="content">{{ content }}</p>
  </div>
</template>

<script setup>


defineProps({
  icon: String,   
  title: String,
  content: String,

  
});
</script>

<style scoped>

.icon {
  margin-bottom: 10px;
}


</style>
