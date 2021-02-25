<template>
    <q-page>
        <div id="container">
          <div style="margin-top: -95px">
            <DisplayText Heading="Join Classes" :Text="text" Color="danger2"/>
            <br />
            <DisplayTextSingle :Small="true" Color="dark" Text="Meeting can be joined" Text2="10 minutes before workout" fontStyle="Kumbh Sans" />
          </div>
          <div style="margin-top: 18px">
            <div v-for="(i, index) in cardData" :key="index" class="flex" style="margin-top: 12px">
                <div style="width: 60%">
                  <CardOne :card_heading="i.Header" :card_date="i.Time" :card_btn_txt="i.btnTxt" />
                </div>
                <div style="width: 33%; margin-left: 7%; margin-top: 14px"><CircleComponent /></div>
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
export default {
  name: 'Classes',
  data () {
    return {
      text: 'Meet Your Instructors On Zoom Meeting',
      cardData: [
        {
          Header: 'Morning Sunrise Workout',
          Time: 'Monday, July 31st.  8:30am',
          btnTxt: '2 Credit'
        },
        {
          Header: 'Morning Sunrise Workout',
          Time: 'Monday, July 31st.  7:30am',
          btnTxt: '1 Credit'
        },
        {
          Header: 'Morning Sunrise Workout',
          Time: 'Monday, July 31st.  8:30am',
          btnTxt: '2 Credit'
        }
      ]
    }
  },
  components: {
    DisplayText,
    DisplayTextSingle,
    CardOne,
    CircleComponent
  },
  mounted () {
    this.$store.dispatch('main/setActionNavigated', 'loggedin')
  }
}
</script>

<style scoped lang="scss">
  #container {
    padding-right: 42px;
    padding-left: 42px;
  }
</style>
