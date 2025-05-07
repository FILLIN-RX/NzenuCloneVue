

<template>
  <div class="card-option :width" :style="{background:backgroundColor}">
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
  content: String,
  backgroundColor: {
                type: String,
                default: '#D1D5DB'
            },
});
</script>

<style scoped>
.card-option {
  padding: 5px;
  width: 100%;
  min-height: 10rem /* Updated to min-height */
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
