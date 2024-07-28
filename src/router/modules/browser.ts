export default {
    path: '/about/browser',
    name: 'Browser',
    meta: {
        title: 'Browser',
    },
    redirect: `/about/browser/useClipboard`,
    children: [
        {
            path: '/about/browser/useClipboard',
            name: 'UseClipboard',
            meta: {
                title: 'useClipboard',
                icon: 'i-ic-baseline-backspace',
            },
            component: () => import('@/components/Browser/useClipboard.vue')
        }
    ],
}