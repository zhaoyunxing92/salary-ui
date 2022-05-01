import {
    createRouter,
    createWebHistory,
    NavigationGuardNext,
    RouteLocationNormalized,
    RouteRecordRaw
} from 'vue-router'

import Main from '../views/main.vue';
import Employee from '../views/employee.vue';
import FieldList from '../views/field.vue';

import { useStore } from '../store';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        meta: {title: '首页', icon: 'main', menu: true},
        component: Main,
        redirect: '/employee',
        children: [
            {
                path: '/employee',
                name: 'employee',
                meta: {'title': '人员列表', auth: true, group: 'salary'},
                component: Employee,
            }, {
                path: '/field',
                name: 'field',
                meta: {'title': '字段列表', auth: true, group: 'field'},
                component: FieldList,
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
    const {title = ''} = to.meta
    // @ts-ignore
    window.document.title = '智能薪酬-' + title;
    store.setSelected(to.name as string)
    next()
})

export default router