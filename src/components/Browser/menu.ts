
import useClipboard from "@/components/Browser/useClipboard.vue";

import { renderIcon } from "@/utils/index";
export default {
  label: "Browser",
  key: "browser",
  icon: renderIcon(),
  children: [
    {
      label: "useClipboard",
      key: "useClipboard",
      icon: renderIcon(),
      component: useClipboard,
    },
  ],
}