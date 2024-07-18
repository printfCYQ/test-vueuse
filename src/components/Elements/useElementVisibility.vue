<template>
  <n-card>
    <n-affix :top="60" :trigger-top="60" class="right-[50px]">
      <n-tag> target可见性： {{ targetIsVisible }}</n-tag>
    </n-affix>
    <div ref="target" class="w-30 h-30 bg-red">target</div>
    <div
      v-for="item in 100"
      :key="item"
      class="w-screen h-10 bg-[#efefef] m-1"
    ></div>
  </n-card>
</template>
    
<script setup lang="ts">
import { useElementVisibility } from "@vueuse/core";

const target = ref(null);
const targetIsVisible = useElementVisibility(target);
</script>