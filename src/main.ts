import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';//引入ant-design-vue所有组件
import 'ant-design-vue/dist/reset.css';//引入ant-design-vue CSS

import router from './routes';

createApp(App).use(router).use(Antd).mount('#app')
