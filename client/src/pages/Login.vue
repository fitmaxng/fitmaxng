<template>
  <q-page>
    <div id="container">
      <div style="padding-left: 1px; margin-top: 100px">
        <DisplayText Heading="Log In" :Text="title" Color="success"/>
        <div id="form-container">
          <q-form>
            <div class="mt">
              <q-input outlined :value="loginForm.email" @input="updateEmail" label="Email" placeholder="Email" type="email" :dense="dense" />
            </div>
            <div class="mt">
              <q-input outlined :value="loginForm.password" @input="updatePassword" label="Password" placeholder="Password" type="password" :dense="dense" />
            </div>
            <div class="mt">
              <q-btn color="secondary" label="LOG IN" glossy
              v-on:click.prevent="submitLoginForm"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import DisplayText from '../components/includes/DisplayText'
// import TextField from '../components/includes/TextField'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data () {
    return {
      dense: false,
      title: ''
    }
  },
  methods: {
    ...mapActions('mainStore', [
      'updateLoginForm', 'submitLoginForm'
    ]),
    updateEmail (val) {
      this.updateLoginForm({ field: 'email', value: val })
    },
    updatePassword (val) {
      this.updateLoginForm({ field: 'password', value: val })
    },
    verifyForm () {
      // TODO: implement getting the values from getter and making sure they're correct.
      return false
    }
  },
  computed: {
    ...mapGetters('mainStore', ['loginForm'])
  },
  components: {
    DisplayText
  },
  mounted () {
    // this.$store.dispatch('main/setActionNavigated', 'loggedout')
  }
}
</script>

<style scoped lang="scss">
  #container {
    padding-right: 42px;
    padding-left: 42px;
  }

  #form-container {
    margin-top: 65px;
  }

  .mt {
    margin-top: 22px;
  }
</style>
