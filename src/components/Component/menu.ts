
import useVModel from "@/components/Component/useVModel/useVModel.vue";
import useVModels from "@/components/Component/useVModels/useVModels.vue";
import { renderIcon } from "@/utils/index";
export default {
  label: "Component",
  key: "component",
  icon: renderIcon(),
  children: [
    {
      label: "useVModel",
      key: "useVModel",
      icon: renderIcon(),
      component: useVModel,
    },
    {
      label: "useVModels",
      key: "useVModels",
      icon: renderIcon(),
      component: useVModels,
    },
  ],
}