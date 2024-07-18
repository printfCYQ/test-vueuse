<template>
  <n-modal :show="modelValue">
    <n-card
      style="width: 600px"
      title="模态框"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-button type="primary" @click="handelClose"> close </n-button>
    </n-card>
  </n-modal>
</template>

<script setup lang="ts">
import { useVModel } from "@vueuse/core";
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits(["update:modelValue"]);
const modelValueVModel = useVModel(props, "modelValue", emit);
const handelClose = () => {
  modelValueVModel.value = false;
};
</script>