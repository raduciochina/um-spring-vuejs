import { createApp } from 'vue'
import App from './App.vue'
// import Login from './components/Login.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router/index.js'

createApp(App).use(router).mount('#app')
