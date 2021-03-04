<template>
    <div>
      <div v-if="TextFieldDisplayType ==='outlined' && IsStep">
        <input type="number" step="any" :name="TextFieldName" :value="TextWithIn" :placeholder="LabelText" :class="[OutlineStyle ==='dark-outline' ? 'text-field-2':'text-field']" autocomplete required />
      </div>
      <div v-else-if="TextFieldDisplayType ==='outlined'">
        <input :type="TextFieldType" step="any" :name="TextFieldName" :value="TextWithIn" :placeholder="LabelText" :class="[OutlineStyle ==='dark-outline' ? 'text-field-2':'text-field']" autocomplete required />
      </div>
      <div v-if="TextFieldDisplayType ==='standard'">
        <q-input :type="TextFieldType" step="any" :name="TextFieldName" :value="TextWithIn" :label="LabelText" required />
      </div>
    </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    TextWithIn: String,
    LabelText: String,
    TextFieldName: String,
    TextFieldType: String,
    TextFieldDisplayType: String,
    OutlineStyle: String,
    IsStep: Boolean
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
