<template>
  <n-card title="子组件">
    <n-form ref="formRef" label-placement="left">
      <n-form-item label="num1:">
        <n-input-number v-model:value="num1" clearable />
      </n-form-item>
      <n-form-item label="num1:">
        <n-input-number v-model:value="num2" clearable />
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import { useVModels } from "@vueuse/core";

const props = defineProps<{
  num1: number;
  num2: number;
}>();

const emit = defineEmits(["update:num1", "update:num2"]);

const { num1, num2 } = useVModels(props, emit);
</script>