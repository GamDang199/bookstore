import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './router';

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios'


const app = createApp(App);
const pinia = createPinia();

app.use(VueAxios, axios)
app.use(Antd);
app.use(pinia);
app.use(router);
app.mount('#app');

