<template>
  <div>
    <button :type="ButtonType" :class="Specification">
      <li>{{Heading}}</li>
      <li>{{Text}}</li>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ReusableButton',
  props: {
    Specification: String,
    Heading: String,
    Text: String,
    ButtonType: String
  }
}
</script>

<style scoped lang="scss">
  li {
    list-style-type: none;
  }
  button {
    outline: none;
    background: none;
    border: none;
  }
  .px-1 {
    padding-left: 5px;
    padding-right: 5px;
  }

  .px-2 {
    padding-left: 10px;
    padding-right: 10px;
  }

  .px-3 {
    padding-left: 15px;
    padding-right: 15px;
  }

  .e-px-1 {
    padding-left: 13px;
    padding-right: 13px;
  }

  .e-py-1 {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  .e-py-2 {
    padding-top: 3px;
    padding-bottom: 3px;
  }

  .px-max {
    padding-left: 28px;
    padding-right: 28px;
  }

  .px-ultra-max {
    padding-left: 75px;
    padding-right: 75px;
  }

  .py-1 {
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .py-2 {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .py-3 {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .mt-1 { margin-top: 5px }
  .mt-2 { margin-top: 10px }
  .mt-3 { margin-top: 15px }
  .mt-4 { margin-top: 20px }

  .radius-1 { border-radius: 5.6px; }
  .radius-2 { border-radius: 8px; }
  .radius-3 { border-radius: 15px; }

  .float-left { float: left; }
  .float-right { float: right; }

  .font-weight-bold { font-weight: bold }

  .no-background { background: transparent }

  .text-classic { color:#0BB8FA }
  .text-dander { color:#FF6633 }
  .text-success { color: #00DC1D }
  .text-light { color: white }
  .text-dark { color: black }

  .contain-dark { background: black }
  .contain-classic { background:#0BB8FA }
  .contain-dander { background:#FF6633 }
  .contain-success { background: #00DC1D }

  .outline-dark-1 { border: 1px solid black }
  .outline-classic-1 { border: 1px solid #0BB8FA }
  .outline-dander-1 { border: 1px solid #FF6633 }
  .outline-dark-2 { border: 2px solid black }
  .outline-classic-2 { border: 2px solid #0BB8FA }
  .outline-dander-2 { border: 2px solid #FF6633 }
</style>
