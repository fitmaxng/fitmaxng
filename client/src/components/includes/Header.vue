<template>
  <div class="q-pa-md">
  <div v-if="navigated === 'loggedin'">
      <q-header style="background: white" class="text-primary q-pa-md">
        <q-toolbar>
          <div id="right-side-nav-items">
          <q-btn flat round dense icon="menu" @click="handleOpenMenu" class="q-mr-sm" color="black" />
            <div id="icon-container">
                <DiamondAcre />
            </div>
            <div>
              <div class="app-name">
                  <strong>FITMAX</strong>
              </div>
            </div>
          </div>
              <q-space />
            <div id="right-nav-props">
              <div id="user-name">Hi Dike</div>
              <Button ButtonType="button" Specification="outline-dark-2 text-dark radius-3 px-2 font-weight-bold mt-2" Text="2 Credits" />
              <Button  Specification="contain-dark text-light radius-3 font-weight-bold mt-2 px-3 px-max e-px-1 e-py-2" Text="Buy" />
              <div id="measurement-text">
                Update Body<br />
                Measurement
              </div>
            </div>
        </q-toolbar>
      </q-header>
  </div>
  <div v-if="navigated === 'loggedout'">
    <q-header style="background: white; padding-top: 43px" class="text-primary q-pa-md">
      <q-toolbar style="padding-left: 25px">
          <div>
            <DiamondAcre />
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
            <DiamondAcre />
          </div>
          <div id="app-name-3">
              <strong>FITMAX</strong>
          </div>
      </q-toolbar>
     </q-header>
   </div>
    <div style="padding-bottom: 168px" v-if="navigated === ''">
   </div>
  </div>
</template>

<script>
import DiamondAcre from './icons/DiamondAcre'
import Button from './Button'
export default {
  name: 'Header',
  data () {
    return {
      mode: 'guest'
    }
  },
  components: {
    DiamondAcre,
    Button
  },
  methods: {
    handleOpenMenu () {
      this.$store.dispatch('main/setSideNavActionOpen')
    }
  },
  computed: {
    navigated () {
      return this.$store.getters['main/getCurrentRoute']
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
      margin-top: -95px;
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
