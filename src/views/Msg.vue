<template>
  <ion-page>


    <ion-content class="ion-padding">
      <h1>Count: {{ store.count }}</h1>
      <h1>{{ store.name }}</h1>
      <h1>Double Count: {{ store.doubleCount }}</h1>

      <ion-button @click="setName">Set Name</ion-button>
      <br><br>
      <ion-button @click="store.increment">Increment Count</ion-button>
    </ion-content>

    <ion-card>
      <ion-card-header>
        <ion-card-title>Hello card</ion-card-title>
      </ion-card-header>

      <div class="custom-class">
        <img src="https://content1.rozetka.com.ua/goods/images/original/3546418.jpg" alt="" width="130" height="200">
      </div>

      <ion-button href="/msg">Go to detail</ion-button>
      <ion-card-content>
      </ion-card-content>
    </ion-card>

    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>

      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="playCircle" />
          <ion-label>Listen now</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="radio" href="/msg">
          <ion-icon :icon="radio" />
          <ion-label>Radio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="library" href="/library">
          <ion-icon :icon="library" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup>
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonCard } from '@ionic/vue';
import { playCircle, radio, library, search } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import { useMyStore } from '@/storage';
import { onMounted } from 'vue';
import BookPage from './BookPage.vue'
const route = useRoute();
const store = useMyStore();

onMounted(() => {
  console.log('Component mounted');
});
</script>

<style scoped>
.custom-class {
  text-align: center;
}
</style>
