import { SessionStorage } from 'quasar'

export function getSideNavChild (state) {
  return state.childSideNav
}

export function getSideNavParent (state) {
  return state.parentSideNav
}

export function getCurrentRoute (state) {
  return state.navigated
}

export function signupForm (state) {
  return state.signupForm
}

export function loginForm (state) {
  return state.loginForm
}

export function navigated (state) {
  return state.navigated
}

export function fmAppTkn (state) {
  return SessionStorage.getItem('fmAppTkn')
}

export function getCurrentUser (state) {
  return state.current_user
}

export function currentJoinLink (state) {
  return state.currentJoinLink
}
