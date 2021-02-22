<template>
    <q-page>
        <div id="container">
          <div style="margin-top: -95px">
            <DisplayText Heading="Buy Workout Credits" :Text="text" Color="classic"/>
            <br />
            <DisplayTextSingle :Small="true" Color="dark" Text="Buy exercise credits to attend the" Text2="Zoom fitness classes." fontStyle="Kumbh Sans" />
          </div>
        </div>
    </q-page>
</template>

<script>
import DisplayText from '../components/includes/DisplayText'
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
export default {
  name: 'Classes',
  data () {
    return {
      text: 'The More You Buy, The More You Save!'
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
  }
</style>
