import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            count: 0,
            bgImage: "default"
        }
    },
    actions: {      //actions can be complex, and can do everything else
                    //actions call the mutations to change the state

    },
    mutations: {    //mutations are only supposed to change the state, stay simple
        increment(state) {
            state.count++
        }
    }
})

createApp(App).mount('#app')
const app = createApp('#app')
app.use(store)

store.commit('increment')
// console.log(store.state.count)
