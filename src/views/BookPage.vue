<template>
  <ion-page>
    <div class="first_section">
      <div class="icon-container">
        <div class="circle"></div>

        <ion-icon :icon="arrowBack" class="icon" size="large" color="light" @click="goBack"></ion-icon>
      </div>
      <div class="centerBook">
        <img :src="bookPage.url" alt="">
        <p>{{bookPage.title}}</p>
        <p>{{bookPage.author}}</p>
      </div>
      <div class="icon-container">
        <div class="circle"></div>
        <ion-icon :icon="heartOutline" class="icon" size="large" color="light" @click="toggleFavorite(bookPage)"></ion-icon>
      </div>
    </div>
    <div class="second_section">
      <div class="bookInfo">
        <div class="pages">
          <span>{{bookPage.pages}}</span>
          <p>Pages</p>
        </div>
        <div class="divider"></div>
        <div class="bookRating">
          <div>
            
            <span>⭐️ {{bookPage.rating}} </span>
          </div>
               <p>Rating</p>
        </div>
        <div class="divider"></div>
        <div class="reviews">
          <span>{{bookPage.reviews}}</span>
          <p>Reviews</p>  
        </div>


      </div>
      <div class="bookGenre">
        <p>
          {{ bookPage.genre }}
          <template v-for="genre in genres">
            <span v-if="bookPage.genre === genre.name">{{ genre.emoji }}</span>
          </template>
        </p>
      </div>
      <p class="textDesc">{{bookPage.text}}</p>
      <div class="Button_container">
        <router-link :to="{name:'TextPage', params: {id:bookPage.id}}" class="custom-link">
       <button class="btn">Read Now</button>
        </router-link>
      </div>

    </div>
  </ion-page>
</template>

<script setup>
import { IonPage, IonButton, IonIcon } from '@ionic/vue';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import { heartOutline, arrowBack, heart } from 'ionicons/icons';
import { text1, text2, text3, text4, text5, text6, text7, text8 } from '../data/bookDescription.js'

const genres = [
  { name: 'Sci-Fi', emoji: '🚀' }, //SciFi
  { name: 'Adventure', emoji: '🌄' }, //Journey
  { name: 'Drama', emoji: '🎭' },
  { name: 'Comedy', emoji: '🤣' }
];




const originalImagesFromHome = [
  { url: 'https://unsplash.it/100/150?image=41', title: 'Image 1', author: 'Author 1', rating: 4.5, genre: 'Sci-Fi', id: 1, pages: 323, reviews: '12.7K', text: text1 },
  { url: 'https://unsplash.it/100/150?image=40', title: 'Image 2', author: 'Author 2', rating: 4.2, genre: 'Adventure', id: 2, pages: 278, reviews: '10.3K', text: text2 },
  { url: 'https://unsplash.it/100/150?image=42', title: 'Image 3', author: 'Author 3', rating: 5.2, genre: 'Drama', id: 3, pages: 395, reviews: '8.3K', text: text3 },
  { url: 'https://unsplash.it/100/150?image=43', title: 'Image 4', author: 'Author 4', rating: 3.5, genre: 'Comedy', id: 4, pages: 395, reviews: '8.3K', text: text4 },
  { url: 'https://unsplash.it/100/150?image=44', title: 'Image 5', author: 'Author 5', rating: 4.2, genre: 'Sci-Fi', id: 5, pages: 395, reviews: '8.3K', text: text5 },
  { url: 'https://unsplash.it/100/150?image=45', title: 'Image 6', author: 'Author 6', rating: 4.8, genre: 'Adventure', id: 6, pages: 395, reviews: '8.3K', text: text6 },
  { url: 'https://unsplash.it/100/150?image=46', title: 'Image 7', author: 'Author 7', rating: 4.3, genre: 'Drama', id: 7, pages: 395, reviews: '8.3K', text: text7 },
  { url: 'https://unsplash.it/100/150?image=47', title: 'Image 8', author: 'Author 8', rating: 3.9, genre: 'Comedy', id: 8, pages: 395, reviews: '8.3K', text: text8 }
];

const route = useRoute();
const bookPage = originalImagesFromHome.find(i => i.id === parseInt(route.params.id));

const router = useRouter();

const isFavorite = computed(() => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  return favorites.some(fav => fav.id === bookPage.id);
});

const toggleFavorite = (book) => {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const existingIndex = favorites.findIndex(fav => fav.id === book.id);
  if (existingIndex !== -1) {
    favorites.splice(existingIndex, 1);
  } else {
    favorites.push(book);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const goBack = () => {
  router.go(-1);
};


</script>

<style scoped>
.divider {
 
  width: 40px; /* Ширина полоски */
  height: 3px; /* Высота полоски */
  background-color: rgb(48, 48, 48); /* Цвет полоски */
  margin-top: 24px;
  transform: rotate(90deg);
}
.centerBook p {
  color: white;
  font-weight: bold;
}

.first_section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 47%;
  z-index: 1;
  background-color: rgb(144, 90, 64);
}

img {
  width: 170px;
  height: 250px;
}

.ion-page {
  background-color: rgb(144, 90, 64);
}

.second_section {
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  height: 67%;
  background-color: rgb(13, 12, 11);
  z-index: 2;
}

.icon-container {
  position: relative;
  width: 48px; 
  height: 48px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  position: absolute;

  z-index: 9999;
}

.bookInfo{
  display: flex;
  margin: 20px 50px 10px 50px;
  font-size: 14px;
  justify-content: space-evenly;
  background-color: rgb(30, 30, 30);
  border-radius: 50px;
  padding-top: 14px;


  
}

.bookRating p {
  margin-left:10px;
}

.bookInfo span{
margin-left: 10px;
font-weight:bold;
}


.circle {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.92); 
  opacity:13%;
  z-index: 3;
}

.circle:first-of-type {
  width: 60px;
  height: 60px;
}

.circle:last-of-type {
  width: 60px;
  height: 60px;
}

.centerBook p {
  display: flex;
  justify-content: center;
}

.bookGenre{
  margin-top:15px;
  display: inline-block;
  position: relative;
background-color: white;
    border-radius: 30px; /* Устанавливаем одинаковый радиус для всех углов */
padding: 0px 10px 0px 10px;
left:38%;

}
span{
  color:white;
}
.bookGenre p {
  font-size: 15px;
  padding: 0;
  margin: 0;
  color:black;
}


.textDesc  {
  font-size: 18px;
line-height: 24px;
margin-left: 15px;
padding: 20px;
}

.btn {
  background-color: rgb(114, 117, 225);
  color: white;
  border: none;
  padding: 20px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.Button_container {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
