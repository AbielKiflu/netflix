import {createRouter,createWebHistory} from 'vue-router';
import {getAuth,onAuthStateChanged} from "firebase/auth";
import WelcomeView from '@/views/WelcomeView.vue';
import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';


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
        ,
        {
            path: '/home',
            name: 'home',
            component: HomeView,
            meta:{
                requiresAuth: true,
              }
        }
    ]
}
);

const getCurrentUser = () =>{
    return new Promise((resolve, reject) =>{
      const removeListener=onAuthStateChanged(
        getAuth(),
        (user)=>{
          removeListener();
          resolve(user);
        },
        reject
      )
    });
   }
  
   router.beforeEach( async (to,from,next)=>{
     if(to.matched.some((record)=>record.meta.requiresAuth)){
      if(await getCurrentUser()){
        next();
      }else{
        next("/");
      }
     }else{
      next();
     }
  
    }
   );

export default router;