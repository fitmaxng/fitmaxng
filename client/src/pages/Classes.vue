<template>
    <q-page>
        <div id="container">
          <div style="margin-top: -110px">
            <DisplayText Heading="Join Classes" :Text="text" Color="danger2"/>
            <br />
            <DisplayTextSingle :Small="true" Color="dark" Text="Meeting can be joined" Text2="10 minutes before workout" fontStyle="Kumbh Sans" />
          </div>
          <div style="margin-top: 0px">
            <div v-for="(i, index) in getCurrentUser.classes" :key="index" class="flex" style="margin-top: 12px">
                <div style="width: 60%">
                  <CardOne :card_heading="i.name" :card_date="clean_date(i.isodatetime)" :card_btn_txt="i.btnTxt" />
                </div>
                  <div v-on:click.prevent="gotoClass(i.name, i.isodatetime)" :disabled="shouldDisable(i.isodatetime)" style="width: 33%; margin-left: 7%; margin-top: 14px"><CircleComponent />
                  </div>
            </div>
          </div>
        </div>
    </q-page>
</template>

<script>
import DisplayText from '../components/includes/DisplayText'
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
import CardOne from '../components/CardOne'
import CircleComponent from '../components/Circle'
import { mapActions, mapGetters } from 'vuex'
// import Vue from 'vue'
import moment from 'moment'

export default {
  name: 'Classes',
  data () {
    return {
      text: 'Meet Your Instructors On Zoom Meeting'
    }
  },
  computed: {
    ...mapGetters('mainStore', ['fmAppTkn', 'getCurrentUser', 'currentJoinLink'])
  },
  methods: {
    ...mapActions('mainStore', [
      'getCurrentUserFromUser',
      'getClassLink'
    ]),
    clean_date (dt) {
      // var date = new Date(dt)
      // dow[date.getDay()] + ' ' + months[date.getMonth()] + ' f' + date.getHours() + ':' + date.getMinutes()
      return moment(String(dt)).format('dddd MMM Do h:mm a')
    },
    shouldDisable (dt) {
      return moment().diff(dt, 'minutes') < 20
    },
    gotoClass (name, dt) {
      this.clicked = true
      if (this.shouldDisable(dt)) {
        return null
      }
      var url = this.getClassLink({ name: name, dt: dt })

      console.log('qqqq', url)
      window.open(this.currentJoinLink, '_blank')
    }
  },
  components: {
    DisplayText,
    DisplayTextSingle,
    CardOne,
    CircleComponent
  },
  created () {
    if (this.fmAppTkn.length > 0) {
      this.getCurrentUserFromUser()
    }
  }
}
</script>

<style scoped lang="scss">
  #container {
    padding-right: 42px;
    padding-left: 42px;
  }
</style>
