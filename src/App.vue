<template>
  <a-config-provider :locale="lang[locale]" :theme="{
    token: {
      colorPrimary: systemConfig.state.color,
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
