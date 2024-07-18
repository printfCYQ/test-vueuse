<template>
  <n-card title="最小化浏览器或切换浏览器tab">
    <n-table :single-line="false" class="m-t-20">
      <tbody>
        <tr v-for="(item, index) in visibilityList" :key="index">
          <td>{{ item.status }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
      
<script setup lang="ts">
import { useDateFormat, useDocumentVisibility, useNow } from "@vueuse/core";

const visibilityList = ref<{ status: string; time: string }[]>([]);
const visibility = useDocumentVisibility();

watch(visibility, (val) => {
  visibilityList.value.push({
    status: val,
    time: useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss").value,
  });
});
</script>