<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert> This is an auto-imported component </AppAlert>
    <br />
    <a-button type="primary">Primary Button</a-button>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://nuxtjs.ir/logos/nuxt-icon-white.png',
  twitterCard: 'summary_large_image',
})
</script>
