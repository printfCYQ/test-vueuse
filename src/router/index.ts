
// import { pascalToCamel } from '@/utils/index';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import {
    browserRouter,
    componentRouter,
    elementsRouter,
    sensorsRouter
} from './modules/index';

// const modules = import.meta.glob('../components/Browser/*.vue');
// console.log(modules);
// const aboutRoute: RouteRecordRaw[] = []

// type PathType = Array<{ path: string; pathLast: string }>

// const pathMap: Map<string, PathType> = new Map()
// Object.keys(modules).forEach((key) => {
//     const path = key.split('/'); // ['..', 'components', 'Browser', 'useClipboard.vue']
//     const pathLast = path[path.length - 1].replace('.vue', '')
//     const pathObj = {
//         path: key,
//         pathLast
//     }
//     if (pathMap.has(path[2])) {
//         pathMap.set(path[2], [...pathMap.get(path[2]) as PathType, pathObj])
//     } else {
//         pathMap.set(path[2], [pathObj])
//     }

// });
// console.log(pathMap);
// (pathMap.entries() as any).forEach(([key, values]: [string, PathType]) => {
//     const o: RouteRecordRaw = {
//         path: `about/${pascalToCamel(key)}`,
//         name: key,
//         redirect: `/about/${pascalToCamel(key)}/${values[0].pathLast}`,
//         children: [],
//     }
//     console.log(values);
//     const children = values.map(item => {
//         console.log(item.path.replace('..', '@'));
//         return {
//             path: `about/${pascalToCamel(key)}/${item.pathLast}`,
//             name: item.pathLast,
//             component: () => import('@/components/Browser/useClipboard.vue')
//         }
//     })
//     o.children = children
//     aboutRoute.push(o)
// })

export const aboutRoute = [
    browserRouter,
    componentRouter,
    elementsRouter,
    sensorsRouter
]

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
}, {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue'),
    children: aboutRoute
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

//导出router
export default router