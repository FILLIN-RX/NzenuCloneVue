<template>
    <div class="col-sm-12 col-md-12 col-lg-3 forfait-card">
      <div class="forfait-head">
        <h5>{{ forfait.name }}</h5>
        <p>{{ forfait.content }}</p>
        <h5>{{ forfait.prix }}</h5>
      </div>
      <div class="forfait-bottom">
        <ul class="attribute-list"  @mouseleave="handleMouseLeave">
          <li v-for="(attr, index) in displayedAttributes" :key="index">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" width="1em" height="1em">
              <path fill="currentColor" d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"/>
            </svg>
            {{ attr }}
          </li>
        </ul>
        <button class="btn-commander" @mouseenter="isExpanded = true" @mouseleave="handleMouseLeave">
          Commander
        </button>
      </div>
    </div>
   
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  const props = defineProps({
    forfait: Object
  })
  
  const isExpanded = ref(false)
  const displayedAttributes = computed(() => {
  if (!props.forfait || !props.forfait.atribute) return []
  return isExpanded.value ? props.forfait.atribute : props.forfait.atribute.slice(0, 12)
})

  
  
  
  function handleMouseLeave() {
    setTimeout(() => {
      if (!document.querySelector('.attribute-list:hover') && !document.querySelector('.btn-commander:hover')) {
        isExpanded.value = false
      }
    }, 200)
  }
  </script>
  
  <style scoped>
  .forfait-card {
    border-radius: 10px;
  }
  li{
    list-style-type: none;
    padding: 5px;
  }
  li:nth-child(odd) {
    background-color: #f0f0f0;
  }
  li:nth-child(even) {
    background-color: #e0e0e0;
  }
  
  .forfait-head {
    background-color: oklch(0.257 0.09 281.288);
    color: white;
    font-weight: 500;
    border-radius: 10px 10px 0 0;
    border: 1px solid gray;
    padding: 10px;
  }
  
  .forfait-bottom {
    border-radius: 0 0 10px 10px;
    border: 1px solid gray;
    
  }
  
  .attribute-list {
    list-style-position: inside;
    padding: 0;
    margin: 0;
  }
  
  .btn-commander {
    margin: 5px;
    background-color: aqua;
    color: blue;
    border: none;
    cursor: pointer;
  }
  </style>
  