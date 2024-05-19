<template>
    <div class="slider">
      <div class="slides">
        <div class="slide" v-for="(image, index) in images" :key="index">
          <img :src="image" class="slide-image"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          'https://via.placeholder.com/600x300?text=Slide+1',
          'https://via.placeholder.com/600x300?text=Slide+2',
          'https://via.placeholder.com/600x300?text=Slide+3'
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .slider {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    animation: slide 9s infinite;
  }
  
  .slide {
    min-width: 100%;
    box-sizing: border-box;
  }
  
  .slide-image {
    width: 100%;
    display: block;
  }
  
  @keyframes slide {
    0% { transform: translateX(0%); }
    33% { transform: translateX(-100%); }
    66% { transform: translateX(-200%); }
    100% { transform: translateX(0%); }
  }
  </style>
  