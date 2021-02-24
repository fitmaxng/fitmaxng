<template>
    <q-page>
        <div id="container">
          <div style="margin-top: -95px">
            <DisplayText Heading="Join Classes" :Text="text" Color="danger2"/>
            <br />
            <DisplayTextSingle :Small="true" Color="dark" Text="Meeting can be joined" Text2="10 minutes before workout" fontStyle="Kumbh Sans" />
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
      text: 'Meet Your Instructors On Zoom Meeting'
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

<style scoped lang="scss">
  #container {
    padding-right: 42px;
    padding-left: 42px;
  }
</style>
