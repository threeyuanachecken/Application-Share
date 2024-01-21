import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ConfigProvider } from 'vant';
import { Dialog } from 'vant';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ConfigProvider);
app.use(Dialog);

app.mount('#app')
