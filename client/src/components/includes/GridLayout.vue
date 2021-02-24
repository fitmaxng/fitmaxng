<template>
  <div class="flex row-wrap">
    <div v-for="(i, index) in data" :key="index">
      <Button :Text="i" ButtonType="button" Specification="ml-2 mt-2 outline-classic-2 text-dark px-2 no-background font-weight-bold radius-3 py-1" />
    </div>
  </div>
</template>

<script>
import Button from './Button'
export default {
  name: 'GridLayout',
  components: {
    Button
  },
  props: {
    data: Array
  }
}
</script>

<style scoped lang="scss">
 .row-wrap {
   flex-wrap: wrap
 }
</style>
