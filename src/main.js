import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import Button from './components/Button.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app =createApp(App)
app.use(pinia).mount('#app')