import { renderIcon } from "@/utils/index";
import useActiveElement from './useActiveElement.vue';
import useDocumentVisibility from './useDocumentVisibility.vue';
import useDraggable from './useDraggable.vue';
import useElementBounding from './useElementBounding.vue';
import useElementSize from './useElementSize.vue';
import useElementVisibility from './useElementVisibility.vue';
import useMouseInElement from './useMouseInElement.vue';
import useParentElement from './useParentElement.vue';
import useResizeObserver from './useResizeObserver.vue';
import useWindowFocus from './useWindowFocus.vue';
import useWindowSize from './useWindowSize.vue';
export default {
    label: "Elements",
    key: "elements",
    icon: renderIcon(),
    children: [
        {
            label: "useActiveElement",
            key: "useActiveElement",
            icon: renderIcon(),
            component: useActiveElement,
        }, {
            label: "useDocumentVisibility",
            key: "useDocumentVisibility",
            icon: renderIcon(),
            component: useDocumentVisibility,
        }, {
            label: "useDraggable",
            key: "useDraggable",
            icon: renderIcon(),
            component: useDraggable,
        }, {
            label: "useElementBounding",
            key: "useElementBounding",
            icon: renderIcon(),
            component: useElementBounding,
        }, {
            label: "useElementSize",
            key: "useElementSize",
            icon: renderIcon(),
            component: useElementSize,
        }, {
            label: "useElementVisibility",
            key: "useElementVisibility",
            icon: renderIcon(),
            component: useElementVisibility,
        }, {
            label: "useMouseInElement",
            key: "useMouseInElement",
            icon: renderIcon(),
            component: useMouseInElement,
        }, {
            label: "useParentElement",
            key: "useParentElement",
            icon: renderIcon(),
            component: useParentElement,
        }, {
            label: "useResizeObserver",
            key: "useResizeObserver",
            icon: renderIcon(),
            component: useResizeObserver,
        }, {
            label: "useWindowFocus",
            key: "useWindowFocus",
            icon: renderIcon(),
            component: useWindowFocus,
        }, {
            label: "useWindowSize",
            key: "useWindowSize",
            icon: renderIcon(),
            component: useWindowSize,
        },
    ]
}