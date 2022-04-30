import {
    createRouter,
    createWebHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw
} from 'vue-router'
import Main from '../views/main.vue';
import { useStore } from '../store';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        meta: {title: '首页', icon: 'main', menu: true},
        component: Main,
        redirect: '/salary/group',
        children: [
            {
                path: '/salary/group',
                name: 'salary-group',
                meta: {'title': '薪资组管理', auth: true, group: 'salary'},
                component: () => import(/* webpackChunkName: "salary-group" */ '../views/salary/group.vue'),
            }, {
                path: '/field/list',
                name: 'field-list',
                meta: {'title': '字段列表', auth: true, group: 'field'},
                component: () => import(/* webpackChunkName: "field-list" */ '../views/field/list.vue'),
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to: RouteLocationNormalized, form: RouteLocationNormalized, next: NavigationGuardNext) => {
    const store = useStore()
    const {title = '', group = ''} = to.meta
    // @ts-ignore
    window.document.title = '智能薪酬-' + title;
    store.setSelected(to.name as string)
    store.setOpened(group as string)
    next()
})

export default router