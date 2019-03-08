import Vue from 'vue'
import Vuex from 'vuex'

import principal from './principal'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      principal
    }
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./principal'], () => {
      const newPrincipal = require('./principal').default
      Store.hotUpdate({ modules: { principal: newPrincipal } })
    })
  }

  return Store
}
