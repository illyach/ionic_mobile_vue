import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMyStore = defineStore('counter', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value + 2);

  function increment() {
    count.value++;
  }

  const  setName = () => { 
    name.value = 'illyach';
  }

  return { count, name, doubleCount, increment, setName };
});
