<template>
  <q-page id="home">
    <div id="container">
      <div class="flex flex-center">
        <img src="../assets/images/center-display.png" id="image" alt="Center image" />
      </div>
      <div id="center-text">
        <DisplayTextStringSingle Text="Instructor Lead Fitness Zoom Class Without Leaving Your House" Color="classic" :Large="true"/>
      </div>
      <div class="flex flex-center column">
        <router-link to='/signup'>
          <Button Type="button" Specification="contain-success text-dark radius-3 font-weight-bold px-ultra-max mt-4 py-1" Text="SIGN UP" />
        </router-link>
        <router-link to='/login'>
         <Button Type="button" Specification="no-background text-classic radius-3 font-weight-bold px-ultra-max mt-4 py-1" Text="LOG IN" />
        </router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
import DisplayTextStringSingle from '../components/includes/DisplayTextSingle'
import Button from '../components/includes/Button'
export default {
  name: 'HomePage',
  components: {
    DisplayTextStringSingle,
    Button
  },
  mounted () {
    this.$store.dispatch('main/setActionNavigated', 'guest')
  }
}
</script>

<style scoped lang="scss">
  #home {
    background: #000032;
    margin-top: -85px;
    padding-bottom: 100px;
  }
  #container {
    padding-top: 98px;
    padding-left: 38px;
    padding-right: 38px;
  }
  #image { margin-top: -50px }
  #center-text {
    text-align: center;
    font-weight: bold;
    line-height: 25px;
    padding: 16px;
    font-family: sans-serif;
  }
  .column {
    flex-direction: column;
  }
</style>
