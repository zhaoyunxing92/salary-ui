import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css';
import App from './App.vue'

import './mock'

message.config({maxCount: 3})

import router from './router'
import filters from './filters'
import directives from './directives'
import store from './store'
import { message } from 'ant-design-vue';

const app = createApp(App)
directives(app)
filters(app)

app.use(store)
    .use(router)
    .mount('#app');