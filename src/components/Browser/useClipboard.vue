<template>
  <n-card v-if="isSupported">
    <p>
      Current copied: <code>{{ text || "none" }}</code>
    </p>
    <n-input
      v-model:value="input"
      type="text"
      autosize
      style="min-width: 50%"
    />
    <n-button @click="copy(input)" type="info"> Copy </n-button>
  </n-card>
  <div v-else>不支持</div>
</template>

<script setup lang="ts">
import { useClipboard } from "@vueuse/core";
const { text, isSupported, copy } = useClipboard();

const input = ref<string>("");
</script>