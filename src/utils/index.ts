import { NIcon } from "naive-ui";

export function renderIcon(iconName: string = '') {
    console.log(iconName, 'iconName');
    return () => h(NIcon, null, { default: () => h(menuIcon(iconName)) });
}

export function menuIcon(className: string) {
    console.log(className === '', 'className');
    return () => h("div", { class: className || 'i-ic:round-auto-awesome-mosaic w-1em h-1em' });
}

// 大驼峰->小驼峰
export const pascalToCamel = (pascalCase: string) => {
    return pascalCase.charAt(0).toLowerCase() + pascalCase.slice(1);
}