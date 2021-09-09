// import { uid } from "quasar"
// import routes from '../../router'
import axios from 'axios'
// import { LocalStorage, SessionStorage } from 'quasar'
import { SessionStorage } from 'quasar'
import configs from '../../config'

// import { v4 as uuidv4 } from 'uuid';

export function setSideNavActionOpen (context) {
  context.commit('handleOpenSideNavOpen')
}

export function setSideNavActionClose ({ commit }) {
  commit('handleOpenSideNavClose')
}

export function setActionNavigated (context, payload) {
  context.commit('handleSwitchRoute', payload)
}

export function updateSignupForm (context, payload) {
  context.commit('updateSignupFormMutation', payload)
}

export function updateLoginForm (context, payload) {
  context.commit('updateLoginFormMutation', payload)
}

export function submitSignupForm ({ commit, getters }) {
  axios.post(
    configs.BASIC_API_HOSTNAME + '/users',
    getters.signupForm,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then(function (response) {
      window.location.replace('/#/login')
    })
    .catch(function (error) {
      console.log(error)
      //    window.location.replace('/error')
    })
  commit('RESET_SIGNUP_FORM')
}

export function getClassLink ({ commit, getters }, payload) {
  // TODO call axios to call api for signup
  // if 201; call the commit below. Else...place error.
  // /join/{class_name}/{isodatetime}
  axios.get(
    configs.BASIC_API_HOSTNAME + '/join/' + payload.name + '/' + payload.dt,
    {
      headers: {
        Authorization: 'Bearer ' + getters.fmAppTkn
      }
    }
  )
    .then(function (response) {
      // return response.data.link
      commit('UPDATE_CURRENT_JOIN_LINK', response.data.link)
    })
    .catch(function (error) {
      console.log(error)
      window.location.replace('/#/login')
      return null
    })
  commit('RESET_SIGNUP_FORM')
}

export function getCurrentUserFromUser ({ commit, getters }) {
  // TODO call axios to call api for signup
  // if 201; call the commit below. Else...place error.
  axios.get(
    configs.BASIC_API_HOSTNAME + '/users/me',
    {
      headers: {
        Authorization: 'Bearer ' + getters.fmAppTkn
      }
    }
  )
    .then(function (response) {
      console.log(response.data)
      commit('CURRENT_USER_UPDATE', response.data)
    })
    .catch(function (error) {
      console.log(error)
      window.location.replace('/#/login')
      commit('SET_LOGIN_OUT')
    })
  commit('RESET_SIGNUP_FORM')
}

export function logOut ({ commit, getters }) {
  // TODO call axios to call api for signup
  // if 201; call the commit below. Else...place error.
  console.log('LLL', getters.fmAppTkn)
  axios.post(
    configs.BASIC_API_HOSTNAME + '/logout',
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getters.fmAppTkn
      }
    }
  )
    .then(function (response) {
      window.location.replace('/#/login')
    })
    .catch(function (error) {
      console.log(error)
      window.location.replace('/#/login')
    })
  commit('RESET_SIGNUP_FORM')
}

export function submitLoginForm ({ commit, getters }) {
  // TODO call axios to call api for signup
  // if 201; call the commit below. Else...place error.
  var payload = {
    username: getters.loginForm.email,
    password: getters.loginForm.password,
    grant_type: '',
    scope: '',
    client_id: '',
    client_secret: ''
  }
  console.log(payload)
  const params = new URLSearchParams()
  params.append('username', getters.loginForm.email)
  params.append('password', getters.loginForm.password)

  axios.post(
    configs.BASIC_API_HOSTNAME + '/token',
    params,
    {
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
  )
    .then(function (response) {
      SessionStorage.set('fmAppTkn', response.data.access_token)
      window.location.replace('/#/classes')
      console.log(response.data.access_token)
      commit('SET_LOGIN_IN')
    })
    .catch(function (error) {
      console.log(error)
      //    window.location.replace('/error')
    })
  commit('RESET_LOGIN_FORM')
}
