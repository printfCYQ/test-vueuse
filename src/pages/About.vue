<template>
  <n-layout has-sider class="w-screen h-screen">
    <n-layout-sider class="!bg-[#fdfdfd]">
      <n-menu
        :options="menuOptions"
        @update:value="handleUpdateValue"
        :default-value="menuCurrent"
      />
    </n-layout-sider>
    <n-layout>
      <component :is="component"></component>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import animationMenu from "@/components/Animation/menu";
import arrayMenu from "@/components/Array/menu";
import browserMenu from "@/components/Browser/menu";
import componentMenu from "@/components/Component/menu";
import useVModel from "@/components/Component/useVModel/useVModel.vue";
import elementsMenu from "@/components/Elements/menu";
import networkMenu from "@/components/Network/menu";
import reactivityMenu from "@/components/Reactivity/menu";
import sensorsMenu from "@/components/Sensors/menu";
import stateMenu from "@/components/State/menu";
import timeMenu from "@/components/Time/menu";
import utilitiesMenu from "@/components/Utilities/menu";
import watchMenu from "@/components/Watch/menu";
import type { MenuOption } from "naive-ui";
// import { renderIcon } from "@/utils/index";

const component = shallowRef<Component>(useVModel);

const menuCurrent = ref("useVModel");

type NewMenuOption = MenuOption & {
  component: Component;
};

function handleUpdateValue(key: string, item: NewMenuOption) {
  console.log(key, item);
  component.value = item.component;
}

const menuOptions = [
  // {
  //   label: "Elements",
  //   key: "elements",
  //   icon: renderIcon(),
  // },
  stateMenu,
  elementsMenu,
  browserMenu,
  sensorsMenu,
  networkMenu,
  animationMenu,
  componentMenu,
  watchMenu,
  reactivityMenu,
  arrayMenu,
  timeMenu,
  utilitiesMenu,
];
</script>
