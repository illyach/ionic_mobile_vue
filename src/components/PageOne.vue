<template>
 
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Go to Page Two</ion-button>
    </ion-nav-link>
  </ion-content>


  
  <div class="slider">
    <div class="slide" v-for="(image, index) in images" :key="index">
      <img :src="image" alt="">
    </div>
  </div>





  <ion-tabs>
    <ion-tab-bar slot="bottom">
      <ion-nav-link router-direction="forward" :component="PageThree">
        <ion-icon :icon="radio" />
        <ion-button>Go to Page Two</ion-button>
      </ion-nav-link>

      <ion-tab-button tab="search">
        <ion-icon :icon="search" />
        <ion-label>Search</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  
</template>

<script lang="ts">
  import { markRaw } from 'vue';
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonIcon, IonTabButton, IonTabBar, IonLabel, IonTabs } from '@ionic/vue';
  import { playCircle, radio, library, search } from 'ionicons/icons';
  import PageTwo from '../components/PageTwo.vue'
 import PageThree from '../components/PageThree.vue';
 import PageOne from '../components/PageOne.vue'
 import ImageSlider from '../components/ImageSlider.vue'
  export default {
    components: { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton },
    data() {
      return {
        component: markRaw(PageTwo),
        PageThree: markRaw(PageThree),
        search: markRaw(search),
        radio: markRaw(radio),
        images: [
      'https://unsplash.it/100/150?image=390',
      'https://unsplash.it/100/150?image=410',
      'https://unsplash.it/100/150?image=420',
      'https://unsplash.it/100/150?image=43',
      'https://unsplash.it/100/150?image=440',
      'https://unsplash.it/100/150?image=45',
      'https://unsplash.it/100/150?image=46',
      'https://unsplash.it/100/150?image=47'
        ]
      };
    },
  };
</script>

<style>

.slider {
  display: flex;
  overflow-x: auto;
  gap: 10px; /* Adjust the gap as needed */
  padding: 10px; /* Optional: Add padding around the slider */
  scroll-snap-type: x mandatory;
  margin-bottom: 230px;
}

.slide {
  flex-shrink: 0;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slide img {
  display: block;
  width: 100px; /* Adjust the width as needed */
  height: 150px; /* Adjust the height as needed */
  object-fit: cover; /* Ensure the image covers the slide area */
}
.slider::-webkit-scrollbar {
  display: none;  /* Safari and Chrome */
}
</style>