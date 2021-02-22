import vue from 'vue'
import vuex from 'vuex'
import main from './modules/main'

vue.use(vuex)

const Store = new vuex.Store({
  modules: {
    main: main
  }
})

export default Store
