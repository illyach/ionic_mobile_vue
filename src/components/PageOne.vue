<template>
 
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Go to Page Two</ion-button>
    </ion-nav-link>
  </ion-content>


  






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
          'https://via.placeholder.com/600x300?text=Slide+1',
          'https://via.placeholder.com/600x300?text=Slide+2',
          'https://via.placeholder.com/600x300?text=Slide+3'
        ]
      };
    },
  };
</script>

<style>

ion-icon {

  display: flex;
  justify-content: space-around;

}
</style>