<template>
  <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
      <a-menu-item key="4">nav 4</a-menu-item>
      <a-menu-item key="5">nav 5</a-menu-item>
      <a-menu-item key="6">nav 6</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script setup lang="ts">
const selectedKeys = ref<string[]>(['2'])
</script>

<style scoped>
.logo {
  width: 120px;
  height: 31px;
  background: rgb(255 255 255 / 20%);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>
