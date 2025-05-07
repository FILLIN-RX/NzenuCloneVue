<template>
    <Splide
      :options="{
        type: 'loop',
        perPage: 2,
        gap: '1rem',
        autoplay: true,
        pauseOnHover: true,
        breakpoints: {
          1024: { perPage: 2 },
          640: { perPage: 1 },
        },
      }"
      class="card-carousel"
    >
      <SplideSlide v-for="(card, index) in cards" :key="index">
        <div class="card">
          <img :src="card.image" alt="Card image" class="card-image" />
          <div class="card-content">
            <h3 class="card-title">{{ card.name }}</h3>
            <h4 class="card-title2">{{ card.title }}</h4>
            <p class="card-description">{{ card.description }}</p>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  </template>
  
  <script setup>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import image1 from '@/assets/image2.jpeg';
  import image2 from '@/assets/image1.png';
  import image3 from '@/assets/image1.jpeg';
  const cards = [
    {
      name: 'Achille Simo',
      title:'Experience Exceptionell',
      description: "Je suis très satisfait de l'hébergement de NzenuHost. Mon site web a gagné en vitesse et en fiabilité depuis que je suis passée à leurs services. Leur équipe de support m'a été d'une grande aide chaque fois que j'ai eu des questions. Je recommande vivement.",
      image: image1,
    },
    {
      name: 'Mariam Sow',
      title:'Hebergement de qualiter',
      description: "Mon site a été hébergé avec NzenuHost depuis plus d'un an et je suis très satisfaite. La qualité de leur hébergement se reflète dans la vitesse et les performances de mon site. Je recommande leur service à tous ceux qui recherchent une expérience d'hébergement de qualité.",
      image: image2,
    },
    {
      name: 'Josue NYA',
      title:'Performance au sommet',
      description: "Mon expérience avec NzenuHost en tant qu'hébergeur pour mon projet Laravel a été exceptionnelle. Leurs serveurs optimisés ont donné une nouvelle vie à mon application, avec des temps de réponse rapides et une stabilité remarquable. Je suis reconnaissant pour leur service de qualité supérieure.",
      image: image3,
    
    },
    
  ];
  </script>
  
  <style scoped>
  .card-carousel {
    padding: 0rem;
  }
  
  .card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    text-align: center;
    padding-bottom: 1rem;
  }
  
  .card:hover {
    transform: scale(1.02);
  }
  
  .card-image {
    width: 20%;
    height: 180px;
    object-fit: cover;
    border-radius: 50%;
    align-self: center;
  }
  
  .card-content {
    padding: 1rem;
  }
  .card-title2{
    color: blue;
  }
  .card-title {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .card-description {
    color: #555;
    font-size: 0.95rem;
  }
  </style>
  