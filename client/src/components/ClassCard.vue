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
               <div style="font-size: 12px; font-weight: bold;">{{card_btn_txt}}</div>
             </div>
          </center>
        </q-card-section>
      </q-card>
    </div>
</template>

<script>
export default {
  name: 'ClassCard',
  props: {
    card_heading: String,
    card_date: String,
    card_btn_txt: String
  }
}
</script>

<style scoped lang="scss">
  .danger-outline {
    border: 2px solid #FF6633;
    border-radius: 38px;
  }
</style>
