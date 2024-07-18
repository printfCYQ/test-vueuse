<template>
  <n-card>
    <n-table :single-line="false">
      <tbody>
        <tr v-for="(value, key, index) in windowSize" :key="index">
          <td class="min-w-30">{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
  
<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const windowSize = useWindowSize();
</script>