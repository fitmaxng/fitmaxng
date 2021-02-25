<template>
  <div>
    <button :type="ButtonType" :class="Specification">
      <li :class="HeadingSize">{{Heading}}</li>
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
    ButtonType: String,
    HeadingSize: String
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

  .px-4 {
    padding-left: 20px;
    padding-right: 20px;
  }

  .px-5 {
    padding-left: 30px;
    padding-right: 30px;
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

  .py-4 {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .xsm { font-size: 10px }
  .sml { font-size: 15px }
  .mid { font-size: 20px }
  .lrg { font-size: 25px }
  .xlg { font-size: 30px }

  .mt-1 { margin-top: 5px }
  .mt-2 { margin-top: 10px }
  .mt-3 { margin-top: 15px }
  .mt-4 { margin-top: 20px }

  .ml-1 { margin-left: 5px }
  .ml-2 { margin-left: 10px }
  .ml-3 { margin-left: 15px }
  .ml-4 { margin-left: 20px }

  .mr-1 { margin-right: 5px }
  .mr-2 { margin-right: 10px }
  .mr-3 { margin-right: 15px }
  .mr-4 { margin-right: 20px }

  .radius-1 { border-radius: 5.6px; }
  .radius-2 { border-radius: 8px; }
  .radius-3 { border-radius: 15px; }
  .radius-4 { border-radius: 28px; }

  .float-left { float: left; }
  .float-right { float: right; }

  .font-weight-bold { font-weight: bold }

  .no-background { background: transparent }

  .text-classic { color:#0BB8FA }
  .text-danger { color:#FF6633 }
  .text-success { color: #00DC1D }
  .text-light { color: white }
  .text-dark { color: black }

  .contain-dark { background: black }
  .contain-classic { background:#0BB8FA }
  .contain-danger { background:#FF6633 }
  .contain-success { background: #00DC1D }

  .outline-dark-1 {
    border: 1px solid black;
    &:hover {
      color: white;
      background: black;
    }
   }

   .outline-grayed-1 {
    border: 1px solid gray;
    &:hover {
      color: white;
      background: gray;
    }
   }

  .outline-classic-1 {
    border: 1px solid #0BB8FA;
    &:hover {
      color: white;
      background: #0BB8FA;
    }
  }

  .outline-danger-1 {
    border: 1px solid #FF6633;
    &:hover {
      color: white;
      background: #FF6633;
    }
  }

  .outline-grayed-2 {
    border: 2px solid gray;
    &:hover {
      color: white;
      background: gray;
    }
   }

  .outline-dark-2 {
    border: 2px solid black;
    &:hover {
      color: white;
      background: black;
    }
  }
  .outline-classic-2 {
    border: 2px solid #0BB8FA;
    &:hover {
      color: white;
      background: #0BB8FA;
    }
  }
  .outline-danger-2 {
    border: 2px solid #FF6633;
    &:hover {
      color: white;
      background: #FF6633;
    }
  }

</style>
