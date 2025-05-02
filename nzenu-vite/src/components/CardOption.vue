

<template>
  <div class="card-option">
    <div class="row">
      <div class="col-1 icon " v-html="icon"></div> <!-- Injection du SVG -->
      <div class="col title">{{ title }}</div>
    </div>
    
    <p class="content">{{ content }}</p>
  </div>
</template>

<script setup>


defineProps({
  icon: String,   // On passera le SVG sous forme de string
  title: String,
  content: String
});
</script>

<style scoped>
.card-option {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  height: 15rem /* Updated to min-height */
}
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
