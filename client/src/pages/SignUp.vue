<template>
  <q-page>
    <div id="container">
      <div style="padding-left: 1px; margin-top: 100px">
        <DisplayText Heading="Sign Up" :Text="title" Color="success"/>
        <div id="form-container">
          <q-form>
            <div>
              <div id="firstNameField">
                <q-input outlined :value="signupForm.first_name" @input="updateFirstName" label="First Name" placeholder="Enter First Name" :dense="dense" />
              </div>
            </div>
            <div class="mt">
              <q-input outlined :value="signupForm.last_name" @input="updateLastName" label="Last Name" placeholder="Enter Last Name" :dense="dense" />
            </div>
            <div class="mt">
              <q-input outlined :value="signupForm.email" @input="updateEmail" label="Email" placeholder="Email" type="email" :dense="dense" />
            </div>
            <div class="mt">
              <q-input outlined :value="signupForm.password" @input="updatePassword" label="Password" placeholder="Password" type="password" :dense="dense" />
            </div>
            <div class="mt">
              <q-input outlined :value="signupForm.confirm_password" @input="updateConfirmPassword" label="Confirm Password" placeholder="Confirm Password" type="password" :dense="dense" />
            </div>
            <div class="mt">
              <q-btn color="secondary" label="SIGN UP" glossy
              v-on:click.prevent="submitSignupForm"
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
  name: 'SignUpPage',
  data () {
    return {
      dense: false,
      title: ''
    }
  },
  methods: {
    ...mapActions('mainStore', [
      'updateSignupForm', 'submitSignupForm'
    ]),
    updateFirstName (val) {
      this.updateSignupForm({ field: 'first_name', value: val })
    },
    updateLastName (val) {
      this.updateSignupForm({ field: 'last_name', value: val })
    },
    updateEmail (val) {
      this.updateSignupForm({ field: 'email', value: val })
    },
    updatePassword (val) {
      this.updateSignupForm({ field: 'password', value: val })
    },
    updateConfirmPassword (val) {
      this.updateSignupForm({ field: 'confirm_password', value: val })
    },
    verifyForm () {
      // TODO: implement getting the values from getter and making sure they're correct.
      return false
    }
  },
  computed: {
    ...mapGetters('mainStore', ['signupForm'])
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
