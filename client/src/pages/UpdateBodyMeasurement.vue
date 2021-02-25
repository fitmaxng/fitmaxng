<template>
    <q-page>
      <div id="container">
        <div style="margin-top: -95px">
          <div class="flex">
              <div style="width: 35%">
                  <strong>
                      <div style="margin-left: 6%">
                          <TextDisplaySingle :Small="true" Text="Weight" />
                      </div>
                   </strong>
                  <Button Text="88" Specification="radius-4 px-4 py-1 outline-grayed-2 text-dark font-weight-bold" />
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
                  <Button Text="1.6" Specification="radius-4 px-4 py-1 outline-grayed-2 text-dark font-weight-bold" />
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
                  <Button Text="44" Specification="radius-4 px-4 py-1 outline-grayed-2 text-dark font-weight-bold" />
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
                  <Button Text="88" Specification="radius-4 px-4 py-1 outline-grayed-2 text-dark font-weight-bold" />
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
                  <Button Text="18" Specification="radius-4 px-4 py-1 outline-grayed-2 text-dark font-weight-bold" />
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
        </div>
      </div>
    </q-page>
</template>

<script>
import TextDisplaySingle from '../components/includes/DisplayTextSingle'
import Button from '../components/includes/Button'
export default {
  name: 'OtherClasses',
  components: {
    TextDisplaySingle,
    Button
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
