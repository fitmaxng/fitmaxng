<template>
    <div>
        <q-card class="my-card no-shadow danger-outline">
            <q-card-section style="padding-top: 12px; padding-bottom: 12px">
                <div class="flex">
                    <div class="left-pane">
                        <li style="font-size: 12px; font-weight: bold">{{month}}<li>
                        <li style="font-size: 18px; font-weight: bold">{{day}}</li>
                        <li style="font-size: 12px; font-weight: bold">{{time}}</li>
                    </div>
                    <div class="right-pane">
                        <li class="top-list" style="font-weight: bold">{{top_text}}</li>
                        <li style="font-size: 12px">{{text}}</li>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  props: {
    month: String,
    day: String,
    time: String,
    top_text: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
  .danger-outline {
    border: 2px solid #FF6633;
    border-radius: 18px;
    .top-list {
        color: #FF6633;
      }
    &:hover {
      border: 2px solid #0BB8FA;
      .top-list {
        color: #0BB8FA;
      }
    }
  }
  .left-pane {
    width: 30%;
    line-height: 15px;
  }
  .right-pane {
    width: 70%;
    border-left: 1px solid gray;
  }

  li {
      list-style-type: none
  }
</style>
