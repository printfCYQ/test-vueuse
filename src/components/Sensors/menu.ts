import { renderIcon } from "@/utils/index";
import onClickOutside from './onClickOutside.vue';
import useElementByPoint from './useElementByPoint.vue';
export default { label: "Sensors", key: "sensors", icon: renderIcon(),children:[
    {
        label: "onClickOutside",
        key: "onClickOutside",
        icon: renderIcon(),
        component: onClickOutside,
    },
    {
        label: "useElementByPoint",
        key: "useElementByPoint",
        icon: renderIcon(),
        component: useElementByPoint,
    }
] }