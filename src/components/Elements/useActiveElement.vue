<template>
  <n-card title="useActiveElement">
    <n-input
      class="m-t-10"
      v-for="item in 4"
      :key="item"
      :placeholder="`${item}`"
    />
  </n-card>
  <n-card>activeElement: {{ key }} </n-card>
</template>
    
<script setup lang="ts">
import { useActiveElement } from "@vueuse/core";
const activeElement = useActiveElement();
const key = computed(
  () => (activeElement.value as HTMLInputElement)?.placeholder || "null"
);
</script>