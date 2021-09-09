<template>
    <div>
        <q-input
          type="number"
          :value="value"
          @input="(updatedValue) => {$emit('input', parseInt(updatedValue))}"
          step="any"
          :name="TextFieldName"
          :label="LabelText"
          required />
    </div>
</template>

<script>
export default {
  name: 'StandardNumberField',
  data () {
    return {
    }
  },
  props: {
    LabelText: String,
    TextFieldName: String,
    OutlineStyle: String,
    IsStep: Boolean,
    OnInput: Function,
    value: Number
  }
  // watch: {
  //   value () {
  //     this.$emit('input', this.value)
  //   }
  // }
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
