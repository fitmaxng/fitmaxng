<template>
  <q-page>
    <div id="container">
       <div style="margin-top: -95px">
          <div>
            <label>
              <input type="file" style="display: none" name="profile">
              <div><AvaterCircleIcon /></div>
            </label>
          </div>
          <div>
            <DisplayTextSingle :Middium="true" Text="Dike Kalu" Color="dark" />
          </div>
          <NigeriaIcon />
          <div class="flex" style="margin-top: 18px">
            <div>
                <WeightLiftIcon />
            </div>
            <div style="font-size: 23px; margin-top: -9px; font-weight: bold; margin-left: 8px">
                8
            </div>
            <div style="font-size: 11px; line-height: 9px; margin-left: 8px">
                Workout<br /> Completed
            </div>
          </div>
        </div>
        <div class="flex" style="margin-top: 150px">
            <PencilCircleIcon2 />
            <div style="font-size: 12px; line-height: 13px; margin-left: 8px; margin-top: 9px">
                Workout<br /> Completed
            </div>
        </div>
      </div>
  </q-page>
</template>

<script>
import AvaterCircleIcon from '../components/includes/icons/AvaterCirlcle'
import DisplayTextSingle from '../components/includes/DisplayTextSingle'
import NigeriaIcon from '../components/includes/icons/Nigeria'
import WeightLiftIcon from '../components/includes/icons/WeightLift2'
import PencilCircleIcon2 from '../components/includes/icons/PencilCircleIcon2'
export default {
  name: 'Profile',
  components: {
    AvaterCircleIcon,
    DisplayTextSingle,
    NigeriaIcon,
    WeightLiftIcon,
    PencilCircleIcon2
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

  #pencil-icon {
    position: absolute;
    margin-top: -30px;
    margin-left: 49px;
  }
  .mt {
    margin-top: 22px;
  }
</style>
