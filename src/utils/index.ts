import { NIcon } from "naive-ui";

export function renderIcon(icon: Component = menuIcon()) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

export function menuIcon(className: string = "i-ic:round-auto-awesome-mosaic") {
    const defalutClass = "text-2xl color-[#18A058]";
    return () => h("div", { class: defalutClass + " " + className });
}