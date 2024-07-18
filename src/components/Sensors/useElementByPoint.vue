<script lang="ts" setup>
import {
useElementBounding,
useElementByPoint,
useEventListener,
useMouse,
} from "@vueuse/core";
import { computed, reactive } from "vue";

const { x, y } = useMouse({ type: "client" });
const { element } = useElementByPoint({ x, y });
const bounding = reactive(useElementBounding(element));

useEventListener("scroll", bounding.update, true);

const boxStyles = computed(() => {
  if (element.value) {
    // console.log(element.value);

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
  window.addEventListener("keydown", async (e) => {
    console.log(e, "e");
    if (e.ctrlKey && e.key === "a" && element.value) {
      console.log(window);
      const canvas = await window!.html2canvas(element.value);
      console.log(canvas);
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "screenshot.png";
      link.click();
    }
  });
});

const pointStyles = computed<Record<string, string | number>>(() => ({
  transform: `translate(calc(${x.value}px - 50%), calc(${y.value}px - 50%))`,
}));
</script>

<template>
  <div
    :style="boxStyles"
    fixed
    pointer-events-none
    z-9999
    border="1 $vp-c-brand"
  />
  <div
    :style="pointStyles"
    fixed
    top-0
    left-0
    pointer-events-none
    w-2
    h-2
    rounded-full
    bg-green-400
    shadow
    z-999
  />
  <n-card>
    <n-space>
      <n-button>Default</n-button>
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