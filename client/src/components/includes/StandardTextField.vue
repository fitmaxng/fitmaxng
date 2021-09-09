<template>
    <div>
        <q-input :type="TextFieldType" v-model="value" step="any" :name="TextFieldName" :label="LabelText" required />
    </div>
</template>

<script>
export default {
  name: 'StandardTextField',
  data () {
    return {
    }
  },
  props: {
    LabelText: String,
    TextFieldName: String,
    TextFieldType: String,
    TextFieldDisplayType: String,
    OutlineStyle: String,
    IsStep: Boolean,
    OnInput: Function,
    value: String
  },
  watch: {
    value () {
      this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped lang="scss">

  .text-field {
    border: 2px solid #C4C3C3;
    border-radius: 18px;
    width: 100%;
    padding: 3px 5px;
    text-indent: 10px;
  }

  .text-field-2 {
    border: 2px solid black;
    border-radius: 18px;
    width: 100%;
    padding: 3px 5px;
    text-indent: 10px;
  }

</style>
