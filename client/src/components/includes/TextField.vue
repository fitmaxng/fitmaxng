<template>
    <div>
      <input :type="TextFieldType" :name="TextFieldName" :value="TextWithIn" placeholder="email" class="text-field" required />
    </div>
</template>

<script>
export default {
  name: 'TextField',
  props: {
    TextWithIn: String,
    LabelText: String,
    TextFieldName: String,
    TextFieldType: String
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
