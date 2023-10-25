/**
 * axios
 * pinia
 * sass
 * vue-router
 * naive-ui
 * element-plus
 * wanggedditor
 */

import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import UndrawUi from 'undraw-ui'
import 'undraw-ui/dist/style.css'
import router from './router/index'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'
import {AdminStore} from './stores/AdminStore'
import {createPinia} from "pinia"
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:9000"

const { message, notification, dialog} = createDiscreteApi( ['message', 'dialog', 'notification'])

const app = createApp(App)
app.provide("axios",axios)
app.provide("dialog",dialog)
app.provide("notification",notification)
app.provide("message",message)
app.provide("server_url",axios.defaults.baseURl)

app.use(ElementPlus)
app.use(router)

app.use(UndrawUi)
app.use(naive)
app.use(createPinia())

const adminStore = AdminStore()
//axios拦截器
axios.interceptors.request.use((config)=>{
    //每次请求都在headers中添加token
    config.headers.token = adminStore.token
    return config
})

app.mount('#app')
