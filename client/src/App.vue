<template>
  <div id="q-app">
    <MainLayout :handleOpenCloseDrawer="handleOpenCloseDrawer" />
    <Drawer :handleOpenCloseDrawer="handleOpenCloseDrawer" :isParentDrawerOpen="openParent" :isChildDrawerOpen="openChild" />
  </div>
</template>

<script>
import MainLayout from './layouts/MainLayout'
import Drawer from './components/includes/Drawer'
export default {
  name: 'Main',
  data () {
    return {
      openParent: true,
      openChild: true
    }
  },
  components: {
    MainLayout,
    Drawer
  },
  methods: {
    handleOpenCloseDrawer () {
      this.openChild = !this.openChild
      setTimeout(() => {
        this.openParent = !this.openParent
      }, 1000)
    }
  }
}
</script>
