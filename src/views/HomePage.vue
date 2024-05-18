<template>
  <ion-page>

    <ion-card>
      <ion-card-header>
        <ion-card-title>
        WELOME HOME
        </ion-card-title>
     
      </ion-card-header> 

      <div class="custom-class">
        <img src="https://content1.rozetka.com.ua/goods/images/original/3546418.jpg" alt="" width="130" height="200" >
      </div>
     
      <ion-button @click="() => router.push('/msg')">Go to mesaage</ion-button>
      <ion-button href="/msg">Go to detail</ion-button>
      <ion-nav-link router-direction="forward" :component="component">
        <ion-button>Go to Page Two</ion-button>
      </ion-nav-link>
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
          <ion-icon :icon="library"  color="warning"/>
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

<script lang="ts">
  import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonCardTitle, IonCardHeader, IonCardContent, IonCard } from '@ionic/vue';
  import { useRouter } from 'vue-router';
  import { playCircle, radio, library, search } from 'ionicons/icons';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { markRaw } from 'vue';
  import 'swiper/css';
  import Msg from './Msg.vue'
  export default {
    
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon,Swiper, SwiperSlide },
    data() {
      return {
        playCircle,
        radio,
        library,
        search,
      };
    },
    setup() {
      const router = useRouter();
     
    

    
      return {
        component: markRaw(Msg),
        router
      };
    },
  };
</script>

<style>
.custom-class img{
margin-left: 30px;
}


</style>