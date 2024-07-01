<template>
  <a-config-provider  :theme="{
    token: {
      borderRadius: 2
    }
  }">
    <!-- algorithm: theme.darkAlgorithm,夜间主题 -->
    <router-view />
  </a-config-provider>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>
