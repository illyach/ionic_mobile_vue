<template>
 
  <ion-content class="ion-padding">
    <h1>Page One</h1>
    <ion-nav-link router-direction="forward" :component="component">
      <ion-button>Go to Page Two</ion-button>
    </ion-nav-link>
  </ion-content>


  
  <div class="slider">
    <div class="slide" v-for="(image, index) in images" :key="index">
      <div class="image-container">
        <img :src="image.url" alt="">
        <div class="rating">⭐ {{ image.rating }}</div>
      </div>
      <div class="info">
        <p class="title">{{ image.title }}</p>
        <p class="author">{{ image.author }}</p>
      </div>
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
          {
            url: 'https://unsplash.it/100/150?image=390',
            title: 'Image 1',
            author: 'Author 1',
            rating: 4.5
          },
          {
            url: 'https://unsplash.it/100/150?image=410',
            title: 'Image 2',
            author: 'Author 2',
            rating: 4.1
          },
          {
            url: 'https://unsplash.it/100/150?image=420',
            title: 'Image 3',
            author: 'Author 3',
            rating: 5.4
          },
          {
            url: 'https://unsplash.it/100/150?image=43',
            title: 'Image 4',
            author: 'Author 4',
            rating: 3.5
          },
          {
            url: 'https://unsplash.it/100/150?image=440',
            title: 'Image 5',
            author: 'Author 5',
            rating: 4.2
          },
          {
            url: 'https://unsplash.it/100/150?image=45',
            title: 'Image 6',
            author: 'Author 6',
            rating: 4.8
          },
          {
            url: 'https://unsplash.it/100/150?image=46',
            title: 'Image 7',
            author: 'Author 7',
            rating: 4.3
          },
          {
            url: 'https://unsplash.it/100/150?image=47',
            title: 'Image 8',
            author: 'Author 8',
            rating: 3.9
          }
        ]
      };
    },
  };
</script>

<style>
.slider {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  scroll-snap-type: x mandatory;
  margin-bottom: 230px;
}

.slide {
  flex-shrink: 0;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
}



.rating {
  position: absolute;
  top: 125px;
  left: 54px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
padding: 2px 5px;
font-size: 9.4px;
font-weight: bold;
  border-radius: 9px;


}

.info {
  text-align: center;
}

.title, .author {
  margin: 5px 0;
}

.slider::-webkit-scrollbar {
  display: none;
}
</style>
