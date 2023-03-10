import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/';
import {createPinia} from "pinia";
import firebase from 'firebase/compat/app';
import {firebaseConfig} from "./firebase";

const app=createApp(App);
const pinia=createPinia();
firebase.initializeApp(firebaseConfig);

app.use(router);
app.use(pinia);
app.mount('#app');
