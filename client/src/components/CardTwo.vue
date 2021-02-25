<template>
    <div>
        <q-card class="my-card no-shadow danger-outline">
            <q-card-section style="padding-top: 2px; padding-bottom: 1px">
                <div>
                    <center>
                        <DisplayTextSingle :Small="true" Text="Credits Balance" Color="text-dark" />
                        <div style="font-weight: bold; font-size: 43px; margin-top: -12px">2</div>
                    </center>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import DisplayTextSingle from './includes/DisplayTextSingle'
export default {
  components: {
    DisplayTextSingle
  }
}
</script>

<style scoped lang="scss">
  .danger-outline {
    border: 2px solid #FF6633;
    border-radius: 18px;
  }
</style>
