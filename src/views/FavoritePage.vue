<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Favorites</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div v-if="sharedState.favorites.length === 0">
          No favorites yet.
          <ion-button @click="showState()">cerf</ion-button>
        </div>
        <div v-else>
          <div v-for="book in sharedState.favorites" :key="book.id">
            <p>{{ book.title }}</p>
            <p>{{ book.author }}</p>
            <img :src="book.url" alt="">
            
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
  import { sharedState } from '../state.js';
  
  const showState = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    sharedState.favorites = favorites;
  };

  
  </script>
  <style>
  p {
    color:black;
  }
</style>