const store = {
  namespaced: true,
  state: {
    childSideNav: false,
    parentSideNav: false,
    navigated: undefined,
    signupForm: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: ''
    }
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
    },
    signupForm (state) {
      return state.signupForm
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
    },
    updateSignupForm (context, payload) {
      context.commit('updateSignupFormMutation', payload)
    }
  },
  mutations: {
    handleSwitchRoute (state, payload) {
      state.navigated = payload
    },
    updateMessage (state, message) {
      state.obj.message = message
    },
    updateSignupFormMutation (state, message) {
      state.signupForm[message.name] = message.value
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
