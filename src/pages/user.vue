<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";

const photo = ref({})

const getUser = async ()=>{
  const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos/1")
  photo.value = data
}

onMounted(async ()=>{
  await getUser()
})
</script>

<template>
<div class="text-white">
  <pre>{{"https://jsonplaceholder.typicode.com/users/1"}}</pre>
  <img :src="photo?.url" alt="xcs">
</div>
</template>

<style scoped>

</style>