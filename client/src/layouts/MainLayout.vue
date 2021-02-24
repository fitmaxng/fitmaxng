<template>
  <div class="layout" id="q-app">
      <q-layout view="lHh lpr lFf">
        <q-page-container>
          <div class="app-layout-view">
            <Header />
            <router-view />
          </div>
        </q-page-container>
      </q-layout>
  </div>
</template>

<script>
import Header from '../components/includes/Header'
export default {
  name: 'Layout',
  components: {
    Header
  }
}
</script>

<style scoped lang="scss">
 @import 'https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Noto+Sans+JP:wght@300&display=swap';
  .layout {
    font-family: 'Hammersmith One', sans-serif;
    font-family: 'Noto Sans JP', sans-serif;
    padding-top: 20px;
  }

  .app-layout-view {
    margin-top: -85px
  }
</style>
