<template>
    <a
      :href="whatsAppLink"
      target="_blank"
      class="whatsapp-button"
      aria-label="Contact via WhatsApp"
    >
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" />
    </a>
  </template>
  
  <script setup>
  const phoneNumber = '33612345678' // 
  const whatsAppLink = `https://wa.me/${phoneNumber}`
  </script>
  
  <style scoped>
  .whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    background-color: #25D366;
    padding: 10px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    transition: transform 0.3s ease;
  }
  
  .whatsapp-button:hover {
    transform: scale(1.1);
  }
  @keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
  
  .whatsapp-button img {
    width: 40px;
    height: 40px;
    animation: pulse 1.5s infinite;
  }
  </style>
  