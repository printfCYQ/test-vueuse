<template>
  <n-card>
    <div ref="target" class="w-30 h-30 bg-[#eee]"></div>

    <n-table :single-line="false" class="m-t-20">
      <tbody>
        <tr v-for="(value, key, index) in data" :key="index">
          <td class="min-w-30">{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
    
<script setup lang="ts">
import { useMouseInElement } from "@vueuse/core";

const target = ref(null);

const data = useMouseInElement(target);
</script>