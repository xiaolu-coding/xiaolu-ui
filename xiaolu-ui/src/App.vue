<template>
  <LButton type="primary" size="large">测试</LButton>
  <LButton size="medium" @click="confirm"></LButton>
  <LButton size="small" disabled @click="confirm">试试</LButton>
</template>

<script lang="ts" setup>
import Test from "./components/Test";
import LButton from "./button/src/Button";

const confirm = () => {
  console.log('111')
}
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
