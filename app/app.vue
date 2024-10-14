<script setup lang="ts" >
const text = ref('');
</script>

<template>
  <div>
    <span> Hello prime vue </span>
    <InputText v-model="text" />
    <Button> Save </Button>
  </div>
</template>
