<template>
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button></ion-back-button>
          </ion-buttons>
          <ion-title>Page Two</ion-title>
        </ion-toolbar>
      </ion-header>
    <div>
      <h1>{{ book.title }}</h1>
      <p>{{ book.author }}</p>
      <p>{{ book.rating }}</p>
      <img :src="book.url" alt="Book Image" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import  { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonIcon, IonTabButton, IonTabBar, IonLabel, IonTabs, IonBackButton, IonButtons } from '@ionic/vue';
  const props = defineProps<{
    book: {
      url: string,
      title: string,
      author: string,
      rating: number
    }
  }>();
  
  </script>
  