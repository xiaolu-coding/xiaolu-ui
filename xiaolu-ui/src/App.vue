<template>
  <LButton type="primary">测试</LButton>
  <LButton>确定</LButton>
</template>

<script lang="ts" setup>
import Test from "./components/Test";
import LButton from "./button/src/Button";
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
