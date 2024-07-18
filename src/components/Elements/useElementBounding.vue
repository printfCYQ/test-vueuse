<template>
  <n-card>
    <n-input ref="el" type="textarea" />

    <n-table :single-line="false" class="m-t-20">
      <tbody>
        <tr v-for="(value, key, index) in elBound" :key="index">
          <td class="min-w-30">{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>
  
<script setup lang="ts">
import { useElementBounding } from "@vueuse/core";

const el = ref();
const elBound = useElementBounding(el);
</script>