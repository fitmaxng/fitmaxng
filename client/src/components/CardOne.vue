<template>
    <div>
     <q-card class="my-card no-shadow danger-outline">
        <q-card-section style="padding-left: 3px; padding-right: 3px; padding-top: 8px; padding-bottom: 4px">
          <center>
            <strong>
                <div style="font-size: 13px; margin-top: 8px">{{card_heading}}</div>
            </strong>
             <div style="font-size: 10px">{{card_date}}</div>
             <div style="margin-top: 4px; padding-bottom: 8px">
               <Button ButtonType="button" :Text="card_btn_txt" Specification="text-light font-weight-bold contain-danger radius-3 xsm" />
             </div>
          </center>
        </q-card-section>
      </q-card>
    </div>
</template>

<script>
import Button from './includes/Button'
export default {
  name: 'CardOne',
  props: {
    card_heading: String,
    card_date: String,
    card_btn_txt: String
  },
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
  .danger-outline {
    border: 2px solid #FF6633;
    border-radius: 38px;
  }
</style>
