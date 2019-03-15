import Vue from 'vue'
import Vuex from 'vuex'

import principal from './principal'
import layout2 from './layout2'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      principal,
      layout2
    }
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./principal'], () => {
      const newPrincipal = require('./principal').default
      Store.hotUpdate({ modules: { principal: newPrincipal } })
    })

    module.hot.accept(['./layout2'], () => {
      const newLayout2 = require('./layout2').default
      Store.hotUpdate({ modules: { layout2: newLayout2 } })
    })
  }

  return Store
}
