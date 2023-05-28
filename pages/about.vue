<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <div>{{ data }}</div>
  </section>
</template>
<script setup lang="ts">
// Type of `data` is inferred as
// {
//   createdAt: {
//     year: number
//     month: number
//     day: number
//   }
// }
const { data } = await useFetch('/api/bar')
</script>
