import Vue from 'vue'

export function handleSwitchRoute (state, message) {
  Vue.set(state, 'navigated', message)
}

export function updateMessage (state, message) {
  Vue.set(state, 'obj.message', message)
}

export function updateSignupFormMutation (state, message) {
  var signupForm = state.signupForm
  signupForm[message.field] = message.value
  Vue.set(state, 'signupForm', signupForm)
}

export function updateLoginFormMutation (state, message) {
  var loginForm = state.loginForm
  loginForm[message.field] = message.value
  Vue.set(state, 'loginForm', loginForm)
}

export function handleOpenSideNavOpen (state) {
  Vue.set(state, 'parentSideNav', !state.parentSideNav)
  setTimeout(() => {
    Vue.set(state, 'childSideNav', !state.childSideNav)
  }, 50)
}

export function RESET_SIGNUP_FORM (state) {
  console.log(state.signupForm)
  Vue.set(state, 'signupForm', {})
}

export function CURRENT_USER_UPDATE (state, message) {
  Vue.set(state, 'current_user', message)
  Vue.set(state, 'navigated', 'loggedin')
}

export function SET_LOGIN_IN (state) {
  Vue.set(state, 'navigated', 'loggedin')
}

export function UPDATE_CURRENT_JOIN_LINK (state, message) {
  Vue.set(state, 'currentJoinLink', message)
}

export function SET_LOGIN_OUT (state) {
  Vue.set(state, 'navigated', 'loggedout')
}

export function RESET_LOGIN_FORM (state) {
  console.log(state.loginForm)
  Vue.set(state, 'loginForm.email', '')
  Vue.set(state, 'loginForm.password', '')
}

// export function handleOpenSideNavClose (state) {
//   state.childSideNav = !state.childSideNav
//   Vue.set(state, 'signupForm.message.name', message.value)
//   setTimeout(() => {
//     state.parentSideNav = !state.parentSideNav
//     Vue.set(state, 'signupForm.message.name', message.value)
//   }, 400)
// }

// export function FILES_UPLOADED (state, payload) {
//   const newFilesUploaded = { ...state.files_uploaded }
//   for (var key in payload) {
//     newFilesUploaded[key] = payload[key]
//   }
//   Vue.set(state, 'files_uploaded', newFilesUploaded)
// }
