<template>
    <div>
        <div id="display-text">{{Heading}}</div>
        <div :class="Color" id="desc">{{Text}}</div>
    </div>
</template>

<script>
export default {
  name: 'DisplayText',
  props: {
    Heading: String,
    Text: String,
    Color: String
  }
}
</script>

<style scoped lang="scss">

 #display-text {
    font-weight: bold;
    font-size: 28px;
 }

 li {
     list-style-type: none;
 }

.success { color: #00B518 }
.classic { color: #0BB8FA }
.danger { color: #E70808 }
.danger2 { color: #FF6633 }

#desc {
   font-size: 26px;
   line-height: 28px;
   font-weight: bold;
}
</style>
