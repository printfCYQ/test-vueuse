<template>
  <div>
    <ChildModal v-model="modelValue"></ChildModal>
    <n-button type="primary" @click="handelClick"> open </n-button>
  </div>
</template>

<script setup lang="ts">
import ChildModal from "./childModal.vue";
const modelValue = ref(false);

const handelClick = () => {
  modelValue.value = true;
};
</script>