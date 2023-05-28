<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
    <div>{{ bar }}</div>
    <code>{{ runtimeConfig }}</code>
    <code>{{ appConfig }}</code>
    <AppAlert> This is an auto-imported component. </AppAlert>
    <div>{{ foo }}</div>
    <div>{{ bar }}</div>
    <p>Current color: {{ color }}</p>
    <div>
      Counter: {{ counter }}
      <button @click="counter++">+</button>
      <button @click="counter--">-</button>
    </div>
  </section>
</template>
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const appConfig = useAppConfig()
const counter = useState('counter', () => Math.round(Math.random() * 1000))

const color = useColor()

useSeoMeta({
  title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://nuxtjs.ir/logos/built-with-nuxt.svg',
  twitterCard: 'summary_large_image',
})

const { data: foo } = await useFetch('/api/foo')
const { data: bar } = await useFetch('/api/bar')
</script>
