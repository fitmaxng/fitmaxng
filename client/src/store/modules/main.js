const store = {
  namespaced: true,
  state: {
    childSideNav: false,
    parentSideNav: false,
    navigated: undefined
  },
  getters: {
    getSideNavChild (state) {
      return state.childSideNav
    },
    getSideNavParent (state) {
      return state.parentSideNav
    },
    getCurrentRoute (state) {
      return state.navigated
    }
  },
  actions: {
    setSideNavActionOpen (context) {
      context.commit('handleOpenSideNavOpen')
    },
    setSideNavActionClose (context) {
      context.commit('handleOpenSideNavClose')
    },
    setActionNavigated (context, payload) {
      context.commit('handleSwitchRoute', payload)
    }
  },
  mutations: {
    handleSwitchRoute (state, payload) {
      state.navigated = payload
    },
    handleOpenSideNavOpen (state) {
      state.parentSideNav = !state.parentSideNav
      setTimeout(() => {
        state.childSideNav = !state.childSideNav
      }, 50)
    },
    handleOpenSideNavClose (state) {
      state.childSideNav = !state.childSideNav
      setTimeout(() => {
        state.parentSideNav = !state.parentSideNav
      }, 400)
    }
  }
}

export default store
