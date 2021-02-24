<template>
    <q-page>
        <div id="container">
          <div style="margin-top: -95px">
            <DisplayText Heading="FAQ" Color="dark"/>
            <DisplayTextSingle :Large="true" Color="classic" Text="Topics" fontStyle="Kumbh Sans" />
            <div v-for="(i, index) in Topics" :key="index" style="margin-top: 18px">
              <DisplayTextSingle :Middium="true" :Text="i.Header" Color="classic" />
              <DisplayTextSingle :Small="true" :Text="i.body" Color="dark" />
            </div>
          </div>
        </div>
    </q-page>
</template>

<script>
import DisplayText from '../components/includes/DisplayText'
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
export default {
  name: 'FAQ',
  data () {
    return {
      Topics: [
        {
          Header: 'How To Buy Fitmax Credit',
          body: 'You can buy Fitmax Credit on the Buy Credit page. Select the Fitmax Credit option that will be sufficient for your prefared work session. Click here to buy Fitmax Credit now.'
        },
        {
          Header: 'How To Use Fitmax Credit',
          body: 'Each of our work session requires a fixed amonut of Fitmax Credit to access. You can only join any of the workout session if you have enough Fitmax Credit available in your wallet.'
        },
        {
          Header: 'How To Buy Fitmax Credit',
          body: 'The more Fitmax Credit you buy, the less you pay. As a result of this, you earn your Fitmax Credit on the long run and pay less when you buy more. Click here to buy Fitmax Credit now.'
        }
      ]
    }
  },
  components: {
    DisplayText,
    DisplayTextSingle
  },
  mounted () {
    this.$store.dispatch('main/setActionNavigated', 'loggedin')
  }
}
</script>

<style scoped>
  #container {
    padding-right: 42px;
    padding-left: 42px;
    padding-bottom: 90px;
  }
  .grid-layout {
    margin-top: 19px;
    margin-left: -11px;
  }
  .useage {
    color: red;
    font-weight: bold;
    text-align: center;
    margin-top: 19px;
  }
  .pane-one { width: 30% }
  .pane-two {
      width: 60%;
      margin-left: 1%;
   }
</style>
