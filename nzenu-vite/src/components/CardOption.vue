

<template>
  <div :class="['card-option', cardClass]">
    <div class="flex space-x-3">
      <div class="col-1 icon " v-html="icon"></div> <!-- Injection du SVG -->
      <div class="col title">{{ title }}</div>
    </div>
    
    <p class="content">{{ content }}</p>
  </div>
</template>

<script setup>


defineProps({
  icon: String,   
  title: String,
  content: String,

  cardClass: {
                type:[ String,Array,Object],
                default: ()=>[]
            }
});
</script>

<style scoped>

.icon {
  margin-bottom: 10px;
}
.title {
  font-weight: bold;
  color: #003366;
  margin-bottom: 8px;
}
.content {
  color: #333;
}
</style>
