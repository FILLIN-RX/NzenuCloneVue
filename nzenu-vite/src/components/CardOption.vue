<template>
  <div class="p-3 space-y-2 h-full">
    <div class="flex space-x-3">
      <div class="col-1 icon">
        <slot name="icon" />
      </div>
      <div class="col title font-bold mb-1">{{ title }}</div>
    </div>

    <p class="content">{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  content: String,
});
</script>

<style scoped>
.icon {
  margin-bottom: 10px;
}
</style>
