<script setup lang="ts" >
const text = ref('');

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
</template>
