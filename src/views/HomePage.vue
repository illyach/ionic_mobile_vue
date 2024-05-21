<template>
  <ion-page>
    <ion-content class="ion-padding">
      <h1>Page One</h1>
      <button @click="goToPageTwo">Go to Page Two</button>
    </ion-content>


    <div class="navbar">
<div>
  <a href="/msg" class="active">Home</a>
  <!-- <ion-icon :icon="playCircle" /> -->
</div>

<div>
  <a href="#news">News</a>
</div>
  
 <div>
  <a href="#contact">Contact</a>
 </div>

</div>
    
    

    <div class="genre-buttons">
      <button v-for="genre in genres" :key="genre" @click="myMethod(genre)">
        {{ genre }}
      </button>
      <button @click="resetFilter">All</button>
    </div>

    <div class="slider">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <div>
          <div class="image-container">
            <img :src="image.url" usemap="#imagemap" alt="" />
            <map name="imagemap">
              <area shape="rect" coords="0,0,100,100" :href="'/msg'" alt="" />
            </map>
            <div class="rating">⭐ {{ image.rating }}</div>
          </div>
          <div class="info">
            <p class="title">{{ image.title }}</p>
            <p class="author">{{ image.author }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- <ion-tabs>
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
          <ion-icon :icon="library" color="warning" />
          <ion-label>Library</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs> -->
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonNavLink } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { playCircle, radio, library, search } from 'ionicons/icons';
import CustomPage from './CustomPage.vue'

// Icons
const playCircleIcon = playCircle;
const radioIcon = radio;
const libraryIcon = library;
const searchIcon = search;

// Use router
const router = useRouter();
const goToPageTwo = () => {
      router.push('/msg').catch(err => {
        console.error('Navigation error:', err);
      });;
    };

    const goToCustomPage = () => {
      router.push('/msg').catch(err => {
        console.error('Navigation error:', err);
      });;
    };
// Data
const genres = ['Sci-Fi', 'Adventure', 'Drama', 'Comedy'];
const originalImages = [
  { url: 'https://unsplash.it/100/150?image=41', title: 'Image 1', author: 'Author 1', rating: 4.5, genre: 'Sci-Fi' },
  { url: 'https://unsplash.it/100/150?image=40', title: 'Image 2', author: 'Author 2', rating: 4.2, genre: 'Adventure' },
  { url: 'https://unsplash.it/100/150?image=42', title: 'Image 3', author: 'Author 3', rating: 5.2, genre: 'Drama' },
  { url: 'https://unsplash.it/100/150?image=43', title: 'Image 4', author: 'Author 4', rating: 3.5, genre: 'Comedy' },
  { url: 'https://unsplash.it/100/150?image=44', title: 'Image 5', author: 'Author 5', rating: 4.2, genre: 'Sci-Fi' },
  { url: 'https://unsplash.it/100/150?image=45', title: 'Image 6', author: 'Author 6', rating: 4.8, genre: 'Adventure' },
  { url: 'https://unsplash.it/100/150?image=46', title: 'Image 7', author: 'Author 7', rating: 4.3, genre: 'Drama' },
  { url: 'https://unsplash.it/100/150?image=47', title: 'Image 8', author: 'Author 8', rating: 3.9, genre: 'Comedy' }
];

const images = ref(originalImages);

// Methods
const myMethod = (genre) => {
  images.value = originalImages.filter(image => image.genre === genre);
};

const resetFilter = () => {
  images.value = originalImages;
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

.genre-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.genre-buttons button {
  padding: 5px;
  background-color: rgb(7, 6, 6);
  border-radius: 9px;
  color: white;
  font-weight: bold;
}


/* Place the navbar at the bottom of the page, and make it stick */
.navbar {
  background-color: #d4d4d4;
  border-top:2px solid #0e0d0d;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
}

/* Style the links inside the navigation bar */
.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.navbar a.active {
  background-color: #04AA6D;
  color: white;
}

</style>