<template>
  <n-card>
    <div ref="el" class="fixed w-30 h-30 bg-red cursor-move z-50"></div>

    <n-table :single-line="false" class="m-t-20">
      <tbody>
        <tr v-for="(value, key, index) in draggable" :key="index">
          <td class="min-w-30">{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
      
<script setup lang="ts">
import { useDraggable } from "@vueuse/core";

const el = ref();
const draggable = ref(
  useDraggable(el, {
    initialValue: { x: 0, y: 0 },
  })
);

watch(
  draggable.value,
  (val) => {
    if (el.value && val.isDragging) {
      el.value!.style.top = val.y + "px";
      el.value!.style.left = val.x + "px";
    }
  },
  { deep: true, immediate: true }
);
</script>