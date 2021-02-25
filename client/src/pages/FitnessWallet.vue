<template>
    <q-page>
      <div id="container">
        <div style="margin-top: -95px">
            <CardTwo />
            <div style="margin-top: 53px">
                <center>
                    <strong>
                      <DisplayTextSingle :Small="true" Text="Transaction History" Color="text-dark" />
                    </strong>
                    <div v-for="(i, index) in cardDataSets" :key="index">
                        <div style="margin-top: 9px">
                            <CardThree :month="i.month" :day="i.day" :time="i.time" :top_text="i.topText" :text="i.text" />
                        </div>
                    </div>
                </center>
            </div>
        </div>
      </div>
    </q-page>
</template>

<script>
import CardTwo from '../components/CardTwo'
import CardThree from '../components/CardThree'
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
export default {
  name: 'OtherClasses',
  data () {
    return {
      cardDataSets: [
        {
          month: 'FEB',
          day: '20',
          time: '08:00AM',
          topText: '2 Credit Spent',
          text: 'Moring Sunrise Workout'
        },
        {
          month: 'FEB',
          day: '18',
          time: '08:00AM',
          topText: '4 Credit Bought',
          text: '5% Saved'
        },
        {
          month: 'FEB',
          day: '17',
          time: '08:00AM',
          topText: '1 Credit Spent',
          text: 'HIIT Fitness Workout'
        },
        {
          month: 'FEB',
          day: '16',
          time: '08:00AM',
          topText: '2 Credit Spent',
          text: 'Weekend Workout'
        },
        {
          month: 'FEB',
          day: '16',
          time: '08:00AM',
          topText: '2 Credit Spent',
          text: '8% Saved'
        }
      ]
    }
  },
  components: {
    CardTwo,
    CardThree,
    DisplayTextSingle
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
    padding-bottom: 90px;
  }
  .mt {
    margin-top: 22px;
  }
</style>
