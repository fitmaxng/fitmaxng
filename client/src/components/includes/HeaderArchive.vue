<template>
  <div id="header-section" class="q-pa-md">
  <div v-if="navigated === 'loggedin'">
      <q-header style="background: white" class="text-primary q-pa-md">
        <q-toolbar>
          <div id="right-side-nav-items">
          <q-btn flat round dense icon="menu" @click="handleOpenMenu" class="q-mr-sm" color="black" />
                <router-link to="/classes">
            <div id="icon-container">
                <FitMaxLogo />
            </div>
                </router-link>
            <div>
            </div>
          </div>
              <q-space />
            <div id="right-nav-props">
              <router-link to="/fitness-wallet"><div id="user-name">Hi {{currentUser.name}}</div></router-link>
              <router-link to="/fitness-wallet"><div id="user-name">{{creditBalance}}</div></router-link>
              <!-- <router-link to="/update-body-measurement">
              <div id="measurement-text">
                Measurements
              </div>
              </router-link> -->
            </div>
        </q-toolbar>
      </q-header>
  </div>
  <div v-if="navigated === 'loggedout'">
    <q-header style="background: white; padding-top: 43px" class="text-primary q-pa-md">
      <q-toolbar style="padding-left: 25px">
          <div>
          </div>
          <div id="app-name-2">
              <strong>FITMAX</strong>
          </div>
      </q-toolbar>
    </q-header>
   </div>
   <div v-if="navigated === 'guest'">
     <q-header style="background: #000032; padding-top: 43px" class="text-primary q-pa-md">
      <q-toolbar class="flex flex-center">
          <div>
          </div>
          <div id="app-name-3">
              <strong>FITMAXa</strong>
          </div>
      </q-toolbar>
     </q-header>
   </div>
  </div>
</template>

<script>
import FitMaxLogo from './icons/FitMaxLogo'
import { mapGetters } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      mode: 'guest'
    }
  },
  components: {
    FitMaxLogo
  },
  methods: {
    handleOpenMenu () {
      this.$store.dispatch('fitmaxStore/setSideNavActionOpen')
    }
  },
  computed: {
    ...mapGetters('fitmaxStore', ['currentUser', 'navigated']),
    creditBalance () {
      return this.currentUser.available_credits + ' credits'
    }
  }
}
</script>

<style scoped lang="scss">
    @import '../../css/quasar.variables.sass';

    .header-text {
        color: $danger;
        font-weight: bold;
        font-size: 20px;
    }
    #right-side-nav-items {
      margin-top: 10px;
      display: flex;
    }
    .container {
       padding-right: 18px;
       padding-left: 18px;
    }
    #icon-container {
      margin-top: 5px;
    }
    .app-name {
      color: black;
      font-size: 14px;
      margin-top: 6px;
    }
    #app-name-2 {
      color: black;
      font-size: 14px;
      margin-top: -6px;
    }
    #app-name-3 {
      color: white;
      font-size: 14px;
      margin-top: -6px;
    }
    #right-nav-props {
      color: black;
      padding-top: 14px;
    }
    #user-name {
      text-align: right;
      margin-right: 9px;
    }
    #measurement-text {
      color: $danger;
      font-weight: bold;
      margin-top: 8px;
    }
</style>
