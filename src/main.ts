import { createApp } from 'vue'
import router from './router'
import { store, key } from './store'
import App from './App.vue'
import './assets/icon/iconfont.js'
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './permission.ts'
import './styles/index.css'
import SvgIcon from './components/SvgIcon/index.vue'

const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(ElementPlus)
app.component('svg-icon', SvgIcon)

app.mount('#app')
