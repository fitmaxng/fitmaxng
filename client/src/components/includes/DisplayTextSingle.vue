<template>
    <div>
        <div v-if="Large" class="classic" style="font-size: 24px">{{Text}}</div>
        <div v-if="Middium" :class="Color" style="font-size: 20px; font-weight: bold">{{Text}}</div>
        <div v-if="Small" :class="Color" style="font-size: 14px">
          <div :style="[fontStyle ? {fontFamily: fontStyle}:{fontFamily: ''}]">{{Text}}</div>
          <div :style="[fontStyle ? {fontFamily: fontStyle}:{fontFamily: ''}]">{{Text2}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DisplayTextSingle',
  props: {
    Text: String,
    Text2: String,
    Large: Boolean,
    Middium: Boolean,
    Small: Boolean,
    Color: String,
    fontStyle: String
  }
}
</script>

<style scoped lang="scss">
    .dark { color: black }
    .classic { color:#0BB8FA }
    .dander { color:#FF6633 }
    .success { color: #00DC1D }
</style>
