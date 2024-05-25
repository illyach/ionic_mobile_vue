<template>
  <ion-page>

    
   
      <h1>Page One</h1>
      <ion-button @click="goToPageTwo" >Go to Page Two</ion-button>



  

    <div class="genre-buttons">
      <button v-for="genre in genres" :key="genre.name" @click="myMethod(genre.name)" :style=" genre.name === isActive ? { color: 'black', backgroundColor: 'white', border:'3px solid black' } : {}" >
        {{ genre.emoji }}  {{ genre.name }} 
      </button>
      <button @click="resetFilter" :style=" isActive === '' ? { color: 'black', backgroundColor: 'white', border:'3px solid black' } : {}"> Total </button>
    </div>

    <div class="slider" >
      <div class="slide" v-for="(image, index) in images" :key="index"  >
        <router-link :to="{name:'CustomPage', params: {id:image.id}}" class="custom-link">
        <div>
          <div class="image-container">
            <img :src="image.url"  alt="" />
         
            <div class="rating">⭐ {{ image.rating }}</div>
          </div>
          <div class="info">
            <p class="title">{{ image.title }}</p>
            <p class="author">{{ image.author }}</p>
          </div>
        </div>
      </router-link>
      </div>
    </div>


    <nav class="nav">
      <a href="#" class="nav__link">
        <ion-icon :icon="playCircle" ></ion-icon>
        <span class="nav__text">Home</span>
      </a>
 
      <a href="#" class="nav__link nav__link--active">
        <ion-icon :icon="playCircle"></ion-icon>
        <span class="nav__text">Search</span>
      </a>
      <a href="#" class="nav__link">
        <ion-icon :icon="playCircle"></ion-icon>
        <span class="nav__text">Library</span>
      </a>
      <a href="#" class="nav__link">
        <ion-icon :icon="playCircle"></ion-icon>
        <span class="nav__text">Favorite</span>
      </a>
     
    </nav>
   
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonContent, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon, IonNavLink } from '@ionic/vue';
import { useRouter } from 'vue-router';
import { playCircle, radio, library, search } from 'ionicons/icons';
import CustomPage from './CustomPage.vue'

    // const genres = [`Sci-Fi`, 'Adventure', 'Drama', 'Comedy'];
    const genres = [
  { name: 'SciFi', emoji: '🚀' },
  { name: 'Journey', emoji: '🌄' },
  { name: 'Drama', emoji: '🎭' },
  { name: 'Comedy', emoji: '🤣' }
];
    const originalImages = [
      { url: 'https://unsplash.it/100/150?image=41', title: 'Image 1', author: 'Author 1', rating: 4.5, genre: 'Sci-Fi', id:1 },
      { url: 'https://unsplash.it/100/150?image=40', title: 'Image 2', author: 'Author 2', rating: 4.2, genre: 'Adventure', id:2 },
      { url: 'https://unsplash.it/100/150?image=42', title: 'Image 3', author: 'Author 3', rating: 5.2, genre: 'Drama', id:3 },
      { url: 'https://unsplash.it/100/150?image=43', title: 'Image 4', author: 'Author 4', rating: 3.5, genre: 'Comedy', id:4 },
      { url: 'https://unsplash.it/100/150?image=44', title: 'Image 5', author: 'Author 5', rating: 4.2, genre: 'SciFi', id:5 },
      { url: 'https://unsplash.it/100/150?image=45', title: 'Image 6', author: 'Author 6', rating: 4.8, genre: 'Journey', id:6 },
      { url: 'https://unsplash.it/100/150?image=46', title: 'Image 7', author: 'Author 7', rating: 4.3, genre: 'Drama', id:7 },
      { url: 'https://unsplash.it/100/150?image=47', title: 'Image 8', author: 'Author 8', rating: 3.9, genre: 'Comedy', id:8 }
    ];
  
    const images = ref(originalImages);
    const saveImage = ref('hello world');
    const router = useRouter();
  
    const colorSwitcher = ref(false)
    const isActive = ref('')

    const myMethod = (genre) => {
      images.value = originalImages.filter(image => image.genre === genre);
      colorSwitcher.value = !colorSwitcher.value
      isActive.value = genre
      console.log(colorSwitcher.value)
    };
  
    const resetFilter = () => {
      images.value = originalImages;
      isActive.value = ''
    };
  
   
  
    const goToPageTwo = () => {
      router.push('/msg').catch(err => {
        console.error('Navigation error:', err);
      });
    };

</script>

<style>
.ion-page {
  background-color: black;
}





.slider {
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  scroll-snap-type: x mandatory;
  margin-bottom: 230px;
  margin-left: 10px;
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
  padding: 0.59em;
  background-color: rgb(31, 31, 31);
  border-radius: 20px;
  color: white;
  font-weight: bold;
}





/* <router link> delete blu link color */
.custom-link {
  text-decoration: none;
  color: inherit;
}

.custom-link:focus,
.custom-link:active {
  outline: none;
  box-shadow: none;
}

/* router link delete blu link color */
body {
  background: #222; /* Цвет фона */

}

.nav {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 76px;
  border-top: 3px solid rgb(31, 31, 31);
  background-color: black;
  display: flex;
  overflow-x: auto;
  justify-content: center;
  align-items: center;
  gap:23px;
}

.nav__link ion-icon {
display: flex;

}


.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  min-width: 50px;
  overflow: hidden;
  white-space: nowrap;
  font-family: sans-serif;
  font-size: 13px;
  color: #444444;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  transition: background-color 0.1s ease-in-out;
}


.nav__link:hover {
  background-color: #eeeeee;
}

.nav__link--active {
  color: #009578;
}

.nav__icon {
  font-size: 18px;
}


</style>