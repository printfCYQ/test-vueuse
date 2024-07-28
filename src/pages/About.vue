<template>
  <n-layout has-sider class="w-screen h-screen">
    <n-layout-sider class="!bg-[#fdfdfd]">
      <n-menu
        :options="menuOptions"
        @update:value="handleUpdateValue"
        :default-value="menuCurrent"
        accordion
      />
    </n-layout-sider>
    <n-layout>
      <router-view></router-view>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { renderIcon } from "@/utils";
import { useRoute, useRouter } from "vue-router";
import { aboutRoute } from "../router/index";

const router = useRouter();
const route = useRoute();
const menuCurrent = ref(route.fullPath);

function handleUpdateValue(key: string) {
  router.push(key);
}

const formatterMenu = (list: any[]): any[] => {
  return list.map((item) => {
    // console.log(item);
    const children = item.children ? formatterMenu(item.children) : undefined;
    return {
      label: item.meta.title,
      key: item.path,
      icon: item.meta.icon ? renderIcon(item.meta.icon + ' w-1em h-1em') : renderIcon(),
      children,
    };
  });
};
const menuOptions = formatterMenu(aboutRoute);
</script>
