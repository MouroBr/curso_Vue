import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'//importa o pacote mitt

// cria a instância do pacote mitt
const emitter = mitt()

// iniciar a instancia do vue com base no componente
//createApp(App).mount('#app')
const app = createApp(App)

//configurar a instancia do pacote mitt como sendo uma propriedade global
//essa prorpiedade fica disponivel para todas as instancias de componentes dentro do app
app.config.globalProperties.emitter = emitter

//associar dentro do vue com o elemento htm de id app
app.mount('#app')