export default {
    path: '/about/elements',
    name: 'Elements',
    meta: {
        title: 'Elements',
    },
    redirect: `/about/elements/useClipboard`,
    children: [
        {
            path: '/about/elements/useActiveElement',
            name: 'UseActiveElement',
            meta: {
                title: 'useActiveElement',
            },
            component: () => import('@/components/Elements/useActiveElement.vue'),
        },
        {
            path: '/about/elements/useDocumentVisibility',
            name: 'UseDocumentVisibility',
            meta: {
                title: 'useDocumentVisibility',
            },
            component: () => import('@/components/Elements/useDocumentVisibility.vue'),
        },
        {
            path: '/about/elements/useDraggable',
            name: 'UseDraggable',
            meta: {
                title: 'useDraggable',
            },
            component: () => import('@/components/Elements/useDraggable.vue'),
        },
        {
            path: '/about/elements/useElementBounding',
            name: 'UseElementBounding',
            meta: {
                title: 'useElementBounding',
            },
            component: () => import('@/components/Elements/useElementBounding.vue'),
        },
        {
            path: '/about/elements/useElementSize',
            name: 'UseElementSize',
            meta: {
                title: 'useElementSize',
            },
            component: () => import('@/components/Elements/useElementSize.vue'),
        },
        {
            path: '/about/elements/useElementVisibility',
            name: 'UseElementVisibility',
            meta: {
                title: 'useElementVisibility',
            },
            component: () => import('@/components/Elements/useElementVisibility.vue'),
        }, {
            path: '/about/elements/useMouseInElement',
            name: 'UseMouseInElement',
            meta: {
                title: 'useMouseInElement',
            },
            component: () => import('@/components/Elements/useMouseInElement.vue'),
        },
        {
            path: '/about/elements/useParentElement',
            name: 'UseParentElement',
            meta: {
                title: 'useParentElement',
            },
            component: () => import('@/components/Elements/useParentElement.vue'),
        },
        {
            path: '/about/elements/useResizeObserver',
            name: 'UseResizeObserver',
            meta: {
                title: 'useResizeObserver',
            },
            component: () => import('@/components/Elements/useResizeObserver.vue'),
        },
        {
            path: '/about/elements/useWindowFocus',
            name: 'UseWindowFocus',
            meta: {
                title: 'useWindowFocus',
            },
            component: () => import('@/components/Elements/useWindowFocus.vue'),
        },
        {
            path: '/about/elements/useWindowScroll',
            name: 'UseWindowScroll',
            meta: {
                title: 'useWindowScroll',
            },
            component: () => import('@/components/Elements/useWindowScroll.vue'),
        },
        {
            path: '/about/elements/useWindowSize',
            name: 'UseWindowSize',
            meta: {
                title: 'useWindowSize',
            },
            component: () => import('@/components/Elements/useWindowSize.vue'),
        },
    ],
}