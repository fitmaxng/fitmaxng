<template>
    <q-page>
        <div id="container">
          <div style="margin-top: -95px">
            <DisplayText Heading="Buy Workout Credits" :Text="text" Color="classic"/>
            <br />
            <DisplayTextSingle :Small="true" Color="dark" Text="Buy exercise credits to attend the" Text2="Zoom fitness classes." fontStyle="Kumbh Sans" />
            <div class="grid-layout">
              <GridLayout :data="buttonData" />
            </div>
            <div class="flex" style="margin-left: -11px">
                <div class="pane-one">
                    <Button Text="Other" ButtonType="button" Specification="ml-2 mt-2 outline-classic-2 text-dark px-2 no-background font-weight-bold radius-3 py-1" />
                </div>
                <div class="pane-two">
                    <TextField TextFieldDisplayType="standard" TextFieldType="" TextFieldName="credit"  LabelText="How many credits?" TextWithIn="55" />
                </div>
            </div>
            <div class="useage" style="font-weight: bold">
              YOU SAVED 31%
            </div>
            <div class="flex flex-center">
              <Button ButtonType="submit" HeadingSize="mid" Heading="PAY ₦22,000" Specification="mt-1 contain-classic text-light font-weight-bold py-4 px-5 radius-4" />
            </div>
          </div>
        </div>
    </q-page>
</template>

<script>
import DisplayText from '../components/includes/DisplayText'
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
import GridLayout from '../components/includes/GridLayout'
import Button from '../components/includes/Button'
import TextField from '../components/includes/TextField'
export default {
  name: 'OtherClasses',
  data () {
    return {
      text: 'The More You Buy, The More You Save!',
      buttonData: [
        '1 Credit',
        '3 Credit',
        '5 Credit',
        '7 Credit',
        '9 Credit',
        '11 Credit',
        '13 Credit',
        '15 Credit',
        '17 Credit'
      ]
    }
  },
  components: {
    DisplayText,
    DisplayTextSingle,
    GridLayout,
    Button,
    TextField
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
