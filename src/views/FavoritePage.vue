<template>
    <ion-page>
      <ion-content>
        <div class="content-container" v-if="sharedState.favorites.length === 0">
          No favorites yet.
        </div>
        <div class="content-container" v-else>
          <div class="image-grid">
            <div class="image-item" v-for="book in sharedState.favorites" :key="book.id">
              <div class="image-wrapper">
                <img :src="book.url" alt="">
                <ion-icon 
                  :icon="heartIcon" 
                  size="large" 
                  color="danger" 
                  @click="toggleFavorite(book)" 
                  :style="{ color: isFavorite(book) ? 'red' : 'black' }" 
                  class="favorite-icon">
                </ion-icon>
              </div>
              <div class="info">
                <p class="title">{{ book.title }}</p>
                <p class="author">{{ book.author }}</p>
              </div>
            </div>
          </div>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import { IonPage, IonContent, IonIcon } from '@ionic/vue';
  import { heartOutline , heartDislike } from 'ionicons/icons';
  import { sharedState } from '../state.js';
  import { onMounted } from 'vue';
  
  const heartIcon = heartDislike;
  
  const showState = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    sharedState.favorites = favorites;
  };
  
  const isFavorite = (book) => {
    return sharedState.favorites.some(fav => fav.id === book.id);
  };
  
  const toggleFavorite = (book) => {
    if (isFavorite(book)) {
      sharedState.favorites = sharedState.favorites.filter(fav => fav.id !== book.id);
    } else {
      sharedState.favorites.push(book);
    }
    localStorage.setItem('favorites', JSON.stringify(sharedState.favorites));
  };
  
  onMounted(() => {
    showState();
  });
  </script>
  
  <style scoped>
  .content-container {
    height: 100vh; /* Высота на всю видимую часть экрана */
    overflow-y: auto; /* Вертикальная прокрутка */
    padding: 10px; /* Отступы */
  }
  
  .image-grid {
    display: flex;
    flex-wrap: wrap; /* Перенос строк */
    gap: 10px; /* Отступы между элементами */
  }
  
  .image-item {
    flex: 1 1 calc(33.33% - 20px); /* Три элемента в строке, с учетом отступов */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .image-wrapper {
    position: relative;

    
  }
  
  .image-item img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .favorite-icon {
    position: absolute;
    top: 4px;
    right:1px;
  }
  
  .info {
    text-align: center;
    margin-top: 10px;
  }
  
  .title, .author {
    margin: 5px 0;
    color: black;
  }
  </style>
  