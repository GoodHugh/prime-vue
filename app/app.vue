<script setup lang="ts" >
const text = ref('');
const value = ref(null);

const bigInput = ref({
  paddingY: '2rem'
})

const dtSelect = ref({
  borderRadius: '20px',
  background: 'gray',
  placeholderColor: '{primary.50}',
  root: {
    dropdownColor: 'black',
  },
  colorScheme: {
      dark: {
        root: {
          background: '{primary.color}',
          placeholderColor: '{primary.950}',
        }
      }
  }
})

const selectedCity = ref();
const cities = ref([
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
]);

function toggleDarkMode() {
  document.documentElement.classList.toggle('my-app-dark');
}
</script>

<template>
  <div class="my-card">
    <InputText v-model="text" style="margin-right: 1rem" />
    <Button label="Save" />
    <br>
    {{ text }}
    <br>
    <Button label="Toggle dark mode" @click="toggleDarkMode"/>
  </div>

  <div class="card flex justify-center">
    <InputText type="text" v-model="value" :dt="bigInput" />
  </div>

  <div class="card flex justify-center">
    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" :dt="dtSelect" />
  </div>
</template>
