import { renderIcon } from "@/utils/index";
import useElementByPoint from './useElementByPoint.vue';
export default { label: "Sensors", key: "sensors", icon: renderIcon(),children:[
    {
        label: "useElementByPoint",
        key: "useElementByPoint",
        icon: renderIcon(),
        component: useElementByPoint,
    }
] }