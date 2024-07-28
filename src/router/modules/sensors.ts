export default {
    path: '/about/sensors',
    name: 'Sensors',
    meta: {
        title: 'Sensors',
    },
    redirect: `/about/sensors/useElementByPoint`,
    children: [
        {
            path: '/about/sensors/useElementByPoint',
            name: 'UseElementByPoint',
            meta: {
                title: 'useElementByPoint'
            },
            component: () => import('@/components/Sensors/useElementByPoint.vue')
        }
    ],
}