<template>
    <q-page>
      <div id="container">
        <div style="margin-top: -95px">
          <q-form>
          <div class="flex">
              <div style="width: 35%">
                  <strong>
                      <div style="margin-left: 6%">
                          <TextDisplaySingle :Small="true" Text="Weight" />
                      </div>
                   </strong>
                   <div style="width: 65%">
                    <TextField TextFieldDisplayType="outlined" :IsStep="true" TextFieldName="m_1" TextWithIn="88" OutlineStyle="dark-outline" />
                   </div>
              </div>
              <div style="width: 65%; margin-top:  2px">
                  <TextDisplaySingle :Small="true" Text="Select Measurement Unit" />
                  <div class="flex">
                      <div class="circle-measure-outline">
                          <div class="circle-measure is-selected">kg</div>
                      </div>
                      <div class="circle-measure-outline" style="margin-left: 8px">
                          <div class="circle-measure">Ibs</div>
                      </div>
                  </div>
              </div>
          </div>
        <div class="flex" style="margin-top: 25px">
              <div style="width: 35%;">
                  <strong>
                      <div style="margin-left: 6%">
                          <TextDisplaySingle :Small="true" Text="Height" />
                      </div>
                   </strong>
                   <div style="width: 65%">
                    <TextField TextFieldDisplayType="outlined" :IsStep="true" TextFieldName="m_2" TextWithIn="1.6" OutlineStyle="dark-outline" />
                   </div>
              </div>
              <div style="width: 65%; margin-top:  2px">
                  <TextDisplaySingle :Small="true" Text="Select Measurement Unit" />
                  <div class="flex">
                      <div class="circle-measure-outline">
                          <div class="circle-measure">ft/in</div>
                      </div>
                      <div class="circle-measure-outline" style="margin-left: 8px">
                          <div class="circle-measure is-selected">Ibs</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="flex" style="margin-top: 25px">
              <div style="width: 35%;">
                  <strong>
                      <div style="margin-left: 6%">
                          <TextDisplaySingle :Small="true" Text="Waist" />
                      </div>
                   </strong>
                   <div style="width: 65%">
                    <TextField TextFieldDisplayType="outlined" :IsStep="true" TextFieldName="m_2" TextWithIn="44" OutlineStyle="dark-outline" />
                   </div>
              </div>
              <div style="width: 65%; margin-top:  2px">
                  <TextDisplaySingle :Small="true" Text="Select Measurement Unit" />
                  <div class="flex">
                      <div class="circle-measure-outline">
                          <div class="circle-measure is-selected">in</div>
                      </div>
                      <div class="circle-measure-outline" style="margin-left: 8px">
                          <div class="circle-measure">Ibs</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="flex" style="margin-top: 25px">
              <div style="width: 35%;">
                  <strong>
                      <div style="margin-left: 6%">
                          <TextDisplaySingle :Small="true" Text="Hip" />
                      </div>
                   </strong>
                  <div style="width: 65%">
                    <TextField TextFieldDisplayType="outlined" :IsStep="true" TextFieldName="m_3" TextWithIn="88" OutlineStyle="dark-outline" />
                   </div>
              </div>
              <div style="width: 65%; margin-top:  2px">
                  <TextDisplaySingle :Small="true" Text="Select Measurement Unit" />
                  <div class="flex">
                      <div class="circle-measure-outline">
                          <div class="circle-measure is-selected">in</div>
                      </div>
                      <div class="circle-measure-outline" style="margin-left: 8px">
                          <div class="circle-measure">Ibs</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="flex" style="margin-top: 25px">
              <div style="width: 35%;">
                  <strong>
                      <div style="margin-left: 6%">
                          <TextDisplaySingle :Small="true" Text="Arm" />
                      </div>
                   </strong>
                  <div style="width: 65%">
                    <TextField TextFieldDisplayType="outlined" :IsStep="true" TextFieldName="m_4" TextWithIn="18" OutlineStyle="dark-outline" />
                   </div>
              </div>
              <div style="width: 65%; margin-top:  2px">
                  <TextDisplaySingle :Small="true" Text="Select Measurement Unit" />
                  <div class="flex">
                      <div class="circle-measure-outline">
                          <div class="circle-measure is-selected">in</div>
                      </div>
                      <div class="circle-measure-outline" style="margin-left: 8px">
                          <div class="circle-measure">Ibs</div>
                      </div>
                  </div>
              </div>
          </div>
          <div style="margin-top: 43px">
          <Button Type="submit" Specification="contain-danger text-light radius-3 font-weight-bold px-max py-1 float-left" Text="SAVE" />
          </div>
          </q-form>
        </div>
      </div>
    </q-page>
</template>

<script>
import TextDisplaySingle from '../components/includes/DisplayTextSingle'
import Button from '../components/includes/Button'
import TextField from '../components/includes/TextField'
export default {
  name: 'OtherClasses',
  components: {
    TextDisplaySingle,
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
  .mt {
    margin-top: 22px;
  }
  .circle-measure-outline {
    width: 30px;
    height: 30px;
    border: 2px solid gray;
    border-radius: 50%;
  }
  .circle-measure {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    text-align: center;
    padding-top: 3px;
    font-size: 11px;
  }
  .is-selected {
    background: #FF6633;
    color: white;
  }
</style>
