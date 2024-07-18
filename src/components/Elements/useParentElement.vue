<template>
  <n-card>
    <n-result
      status="404"
      title="404 资源不存在"
      description="生活总归带点荒谬"
    >
      <template #footer>
        <n-button ref="target">target</n-button>
      </template>
    </n-result>
  </n-card>

  <n-card>parentEl:{{ parentEl?.innerHTML }}</n-card>
</template>
      
<script setup lang="ts">
import { useParentElement } from "@vueuse/core";

const target = ref(null);

const parentEl = useParentElement(target);
onMounted(() => {
  console.log(parentEl.value);
});
</script>