<template>
  <n-card title="父组件">
    <p>num1: {{ num1 }}</p>
    <p>num2: {{ num2 }}</p>
    <p>sum:{{ num1 + num2 }}</p>
    <Child v-model:num1="num1" v-model:num2="num2"></Child>
  </n-card>
</template>

<script setup lang="ts">
import Child from "./child.vue";
const num1 = ref<number>(0);
const num2 = ref<number>(1);
</script>