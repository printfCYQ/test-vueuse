<template>
  <n-card title="useWindowFocus">
    <n-table :single-line="false" class="m-t-20">
      <tbody>
        <tr v-for="(item, index) in focusList" :key="index">
          <td>{{ item.status }}</td>
          <td>{{ item.time }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
        
<script setup lang="ts">
import { useDateFormat, useNow, useWindowFocus } from "@vueuse/core";

const focusList = ref<{ status: boolean; time: string }[]>([]);
const focus = useWindowFocus();

watch(focus, (val) => {
  focusList.value.push({
    status: val,
    time: useDateFormat(useNow(), "YYYY-MM-DD HH:mm:ss").value,
  });
});
</script>