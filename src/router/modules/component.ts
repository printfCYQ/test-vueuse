export default {
    path: '/about/component',
    name: 'Component',
    meta: {
        title: 'Component',
    },
    redirect: `/about/Component/useClipboard`,
    children: [
        {
            path: '/about/component/useVModel',
            name: 'UseVModel',
            meta: {
                title: 'useVModel',
                icon: 'carbon:cloud-upload',
            },
            component: () => import('@/components/Component/useVModel/useVModel.vue'),
        },
        {
            path: '/about/component/useVModels',
            name: 'UseVModels',
            meta: {
                title: 'useVModels',
                icon: 'carbon:cloud-upload',
            },
            component: () => import('@/components/Component/useVModels/useVModels.vue'),
        }
    ],
}
