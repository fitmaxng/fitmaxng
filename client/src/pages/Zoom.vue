<template>
    <q-page>
        <div style="margin-top: -98px" class="flex flex-center">
            <img style="margin-top: 55px" src="../assets/images/zoom.png" alt="zoom" />
        </div>
    </q-page>
</template>

<script>
export default {
  mounted () {
    this.$store.dispatch('main/setActionNavigated', '')
  }
}
</script>
