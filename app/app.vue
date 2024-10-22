<script setup lang="ts" >
import {updatePrimaryPalette, updateSurfacePalette} from "@primeuix/styled";

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

function greenPrimary() {
  updatePrimaryPalette({
    50: '{green.50}',
    100: '{green.100}',
    200: '{green.200}',
    300: '{green.300}',
    400: '{green.400}',
    500: '{green.500}',
    600: '{green.600}',
    700: '{green.700}',
    800: '{green.800}',
    900: '{green.900}',
    950: '{green.950}'
  })
}

function purplePrimary() {
  updatePrimaryPalette({
    50: '{purple.50}',
    100: '{purple.100}',
    200: '{purple.200}',
    300: '{purple.300}',
    400: '{purple.400}',
    500: '{purple.500}',
    600: '{purple.600}',
    700: '{purple.700}',
    800: '{purple.800}',
    900: '{purple.900}',
    950: '{purple.950}'
  })
}

function changeSurface() {
  updateSurfacePalette({
    dark: {
      50: '{slate.50}',
      100: '{slate.100}',
      200: '{slate.200}',
      300: '{slate.300}',
      400: '{slate.400}',
      500: '{slate.500}',
      600: '{slate.600}',
      700: '{slate.700}',
      800: '{slate.800}',
      900: '{slate.900}',
      950: '{slate.950}'
    }
  })
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
    <br>
    <br>
    <Button label="Green" @click="greenPrimary" severity="success"/>
    <br>
    <br>
    <Button label="Purple" @click="purplePrimary" severity="help"/>
    <br>
    <br>
    <Button label="Slate" @click="changeSurface" severity="secondary"/>
  </div>

  <div class="card flex justify-center">
    <InputText type="text" v-model="value" :dt="bigInput" />
  </div>

  <div class="card flex justify-center">
    <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" :dt="dtSelect" />
  </div>
</template>
