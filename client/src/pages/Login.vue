<template>
  <q-page>
    <div id="container">
      <div style="padding-left: 1px">
        <DisplayText Heading="Continue" :Text="text" Color="classic" />
        <div id="form-container">
          <q-form>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="text" TextFieldName="username"  LabelText="Username" TextWithIn="Dike Kalu"/>
            </div>
            <div class="mt">
              <TextField TextFieldDisplayType="outlined" TextFieldType="password" TextFieldName="password"  LabelText="Password" TextWithIn="pass12345"/>
            </div>
            <div class="mt">
              <Button Type="submit" Specification="contain-classic text-dark radius-3 font-weight-bold px-max py-1 float-right" Text="LOGIN" />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import DisplayText from '../components/includes/DisplayText'
import TextField from '../components/includes/TextField'
import Button from '../components/includes/Button'
export default {
  name: 'LoginPage',
  data () {
    return {
      text: "Your Fitness Journey, Don't Give Up!"
    }
  },
  components: {
    DisplayText,
    TextField,
    Button
  },
  computed: {
    navigated () {
      return this.$store.getters['main/getCurrentRoute']
    }
  },
  mounted () {
    this.$store.dispatch('main/setActionNavigated', 'loggedout')
  }
}
</script>

<style scoped lang="scss">
  #container {
    padding-right: 42px;
    padding-left: 42px;
    margin-top: 30px;
  }

  #form-container {
    margin-top: 55px;
  }

  .mt {
    margin-top: 22px;
  }
</style>
