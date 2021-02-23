<template>
  <div id="q-app">
    <MainLayout />
    <Drawer />
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import Drawer from './components/includes/Drawer'
export default {
  name: 'Main',
  components: {
    MainLayout,
    Drawer
  }
}
</script>
