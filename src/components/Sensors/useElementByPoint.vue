<script lang="ts" setup>
import {
  useElementBounding,
  useElementByPoint,
  useEventListener,
  useMouse,
} from "@vueuse/core";
import { computed, reactive } from "vue";
import html2canvas from 'html2canvas-pro';

const { x, y } = useMouse({ type: "client" });
const { element } = useElementByPoint({ x, y });
const bounding = reactive(useElementBounding(element));

useEventListener("scroll", bounding.update, true);

const boxStyles = computed(() => {
  if (element.value) {
    return {
      display: "block",
      width: `${bounding.width}px`,
      height: `${bounding.height}px`,
      left: `${bounding.left}px`,
      top: `${bounding.top}px`,
      backgroundColor: "#3eaf7c44",
      transition: "all 0.05s linear",
    } as Record<string, string | number>;
  }
  return {
    display: "none",
  };
});

onMounted(() => {
  window.addEventListener("mousedown", async (e) => {
    await nextTick(); // 等待 DOM 更新 避免直接截图
    if (e.button === 0 && element.value && showBorderAndPoint.value) {
      showBorderAndPoint.value = false;
      await nextTick(); // 等待 DOM 更新 取消边框的现实
      const canvas = await html2canvas(element.value, {
        scale: 2 // 增加分辨率
      });
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "screenshot.png";
      link.click();
    } else if (e.button === 2) {
      showBorderAndPoint.value = false;
      e.preventDefault();
    }
  });
});

const pointStyles = computed<Record<string, string | number>>(() => ({
  transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`,
}));

const showBorderAndPoint = ref(false)
const selectDom = () => {
  showBorderAndPoint.value = true
}
</script>

<template>
  <div v-if="showBorderAndPoint" :style="boxStyles" fixed pointer-events-none z-9999>
    11
  </div>
  <div v-if="showBorderAndPoint" :style="pointStyles" fixed top-0 left-0 pointer-events-none w-2 h-2 rounded-full
    bg-green-400 shadow z-999 />
  <n-card>
    <n-space>
      <n-button @click="selectDom"> Select Dom </n-button>
      <n-button type="tertiary"> Tertiary </n-button>
      <n-button type="primary"> Primary </n-button>
      <n-button type="info"> Info </n-button>
      <n-button type="success"> Success </n-button>
      <n-button type="warning"> Warning </n-button>
      <n-button type="error"> Error </n-button>
    </n-space>
  </n-card>
  <n-card>
    <n-space>
      <n-button ghost> Default </n-button>
      <n-button type="primary" ghost> Primary </n-button>
      <n-button type="info" ghost> Info </n-button>
      <n-button type="success" ghost> Success </n-button>
      <n-button type="warning" ghost> Warning </n-button>
      <n-button type="error" ghost> Error </n-button>
    </n-space>
  </n-card>
</template>