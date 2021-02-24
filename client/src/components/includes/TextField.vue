<template>
    <div>
      <div v-if="TextFieldDisplayType ==='outlined'">
        <input :type="TextFieldType" :name="TextFieldName" :value="TextWithIn" :placeholder="LabelText" class="text-field" required />
      </div>
      <div v-else-if="TextFieldDisplayType ==='standard'">
        <q-input :type="TextFieldType" :name="TextFieldName" :value="TextWithIn" :label="LabelText" />
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
    TextFieldDisplayType: String
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
</style>
