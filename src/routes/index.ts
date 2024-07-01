//引入路由对象
import {createRouter, createWebHistory,  RouterOptions} from 'vue-router'

// 路由类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: any = [
    {
        path: '/admin/login',
        component: () => import('@/views/Admin/Login.vue'),
    }
]

const router = createRouter(<RouterOptions>{
    history: createWebHistory(),
    routes,
});


//导出router

export default router;
