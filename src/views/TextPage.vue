<template>
    <ion-page>
        <ion-content >
        <div class="icon-container">
            <div class="circle"></div>
    
            <ion-icon :icon="arrowBack" class="icon" size="large" color="light" @click="goBack"></ion-icon>
          </div>
          
            <p>{{ bookPage.text }}</p>
          </ion-content>

    </ion-page>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { text1, text2, text3, text4, text5, text6, text7, text8 } from '../data/bookDescription.js';
  import { IonPage, IonButton, IonIcon, IonContent } from '@ionic/vue';
  import { heartOutline, arrowBack, heart } from 'ionicons/icons';

  const originalImagesFromHome = [
    { url: 'https://unsplash.it/100/150?image=41', title: 'Image 1', author: 'Author 1', rating: 4.5, genre: 'Sci-Fi', id: 1, pages: 323, reviews: '12.7K', text: text1 },
    { url: 'https://unsplash.it/100/150?image=40', title: 'Image 2', author: 'Author 2', rating: 4.2, genre: 'Adventure', id: 2, pages: 278, reviews: '10.3K', text: text2 },
    { url: 'https://unsplash.it/100/150?image=42', title: 'Image 3', author: 'Author 3', rating: 5.2, genre: 'Drama', id: 3, pages: 395, reviews: '8.3K', text: text3 },
    { url: 'https://unsplash.it/100/150?image=43', title: 'Image 4', author: 'Author 4', rating: 3.5, genre: 'Comedy', id: 4, pages: 395, reviews: '8.3K', text: text4 },
    { url: 'https://unsplash.it/100/150?image=44', title: 'Image 5', author: 'Author 5', rating: 4.2, genre: 'Sci-Fi', id: 5, pages: 395, reviews: '8.3K', text: text5 },
    { url: 'https://unsplash.it/100/150?image=45', title: 'Image 6', author: 'Author 6', rating: 4.8, genre: 'Adventure', id: 6, pages: 395, reviews: '8.3K', text: text6 },
    { url: 'https://unsplash.it/100/150?image=46', title: 'Image 7', author: 'Author 7', rating: 4.3, genre: 'Drama', id: 7, pages: 395, reviews: '8.3K', text: text7 },
    { url: 'https://unsplash.it/100/150?image=47', title: 'Image 8', author: 'Author 8', rating: 3.9, genre: 'Comedy', id: 8, pages: 395, reviews: '8.3K', text: text8 }
  ];
  
  const route = useRoute();
  const router = useRouter();
  const goBack = () => {
  router.go(-1);
};
  const bookPage = originalImagesFromHome.find(i => i.id === parseInt(route.params.id));

  onMounted(() => {

    console.log('route.params.id:', route.params.id);
  });
  </script>
  
  <style scoped>
  p {
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    white-space: pre-wrap;

  }

  .circle {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.92); 
    opacity:13%;
    z-index: 3;
  }
  
  .circle:first-of-type {
    width: 60px;
    height: 60px;
  }
  
  .circle:last-of-type {
    width: 60px;
    height: 60px;
  }

  .icon-container {
    position: relative;
    width: 48px; 
    height: 48px; 
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    position: absolute;
  
    z-index: 9999;
  }

  ion-content {
    --background: #000; /* Устанавливает черный фон */
  }
  
  
  </style>
  