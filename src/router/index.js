import {createRouter,createWebHistory} from 'vue-router';
import WelcomeView from '@/views/WelcomeView.vue';
import LoginView from '@/views/LoginView.vue';

const router=createRouter(
{
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'welcome',
            component: WelcomeView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        }
    ]
}
);


export default router;