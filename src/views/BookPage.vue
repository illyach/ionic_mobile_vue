
<template>
  <ion-page>
    <ion-button @click="goBack">Назад</ion-button>
  <div>
    <p>{{bookPage.title}} </p>
    <p>{{bookPage.author}} </p>
    <p>{{bookPage.rating}} / 5 </p>
    <p>{{bookPage.genre}} </p>
    <img :src="bookPage.url" alt="">
  </div>
</ion-page>
</template>

<script setup>
import { IonPage, IonContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonNavLink } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

const originalImagesFromHome = [
      { url: 'https://unsplash.it/100/150?image=41', title: 'Image 1', author: 'Author 1', rating: 4.5, genre: 'Sci-Fi', id:1 },
      { url: 'https://unsplash.it/100/150?image=40', title: 'Image 2', author: 'Author 2', rating: 4.2, genre: 'Adventure', id:2 },
      { url: 'https://unsplash.it/100/150?image=42', title: 'Image 3', author: 'Author 3', rating: 5.2, genre: 'Drama', id:3 },
      { url: 'https://unsplash.it/100/150?image=43', title: 'Image 4', author: 'Author 4', rating: 3.5, genre: 'Comedy', id:4 },
      { url: 'https://unsplash.it/100/150?image=44', title: 'Image 5', author: 'Author 5', rating: 4.2, genre: 'Sci-Fi', id:5 },
      { url: 'https://unsplash.it/100/150?image=45', title: 'Image 6', author: 'Author 6', rating: 4.8, genre: 'Adventure', id:6 },
      { url: 'https://unsplash.it/100/150?image=46', title: 'Image 7', author: 'Author 7', rating: 4.3, genre: 'Drama', id:7 },
      { url: 'https://unsplash.it/100/150?image=47', title: 'Image 8', author: 'Author 8', rating: 3.9, genre: 'Comedy', id:8 }
    ];

const route = useRoute(); //это route

const bookPage = originalImagesFromHome.find(i => i.id === parseInt(route.params.id));

const router = useRouter();

const goBack = () => {
  router.go(-1);
};
</script>
