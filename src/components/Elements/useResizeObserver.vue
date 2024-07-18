<template>
  <n-card title="useResizeObserver">
    <n-input ref="el" type="textarea" autosize style="min-width: 50%" />

    <n-table :single-line="false" class="m-t-20">
      <tbody>
        <tr v-for="(value, key, index) in entryOb" :key="index">
          <td class="min-w-30">{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
        
<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
const el = ref();
const entryOb = reactive<any>({});
useResizeObserver(el, (entries) => {
  entryOb.borderBoxSize = entries[0].borderBoxSize;
  entryOb.contentBoxSize = entries[0].contentBoxSize;
  entryOb.contentRect = entries[0].contentRect;
  entryOb.devicePixelContentBoxSize = entries[0].devicePixelContentBoxSize;
  entryOb.target = entries[0].target.innerHTML;
});
</script>