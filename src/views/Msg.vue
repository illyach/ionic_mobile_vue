<template>
  <ion-page>
    <ion-card v-if="user">
      <ion-card-header>
        <ion-card-title>{{ user.name }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>Age: {{ user.age }}</p>
        <p>Email: {{ user.email }}</p>
      </ion-card-content>
    </ion-card>
    <p v-else>Loading...</p>
  </ion-page>
</template>

<script setup>
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/vue';
import axios from 'axios';
import { ref, onMounted } from 'vue';

const user = ref(null);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/user?id=1');
    user.value = response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
});
</script>

<style scoped>
.custom-class {
  text-align: center;
}
</style>
