<template>
  <div
    class="notification"
    :class="{
      info: notifiDetails.type == 'info',
      warning: notifiDetails.type == 'warning',
      text: notifiDetails.type == 'text',
      readStatus: notifiDetails.read_status == true,
    }"
  >
    <p>{{ TimeS(notifiDetails.timestamp) }}</p>
    <p>{{ notifiDetails.description }}</p>
  </div>
</template>

<style lang="scss">
.notification {
  margin: 0 auto;
  padding: 5px;
  box-sizing: border-box;
  margin-bottom: 50px;
  width: 700px;
  background: white;
}
.info {
  border: lightblue 5px solid;
}
.warning {
  border: red 5px solid;
}
.text {
  border: black 5px solid;
}
.readStatus {
  opacity: 0.5;
  color: rgba(0, 0, 0, 0.7);
}
</style>

<script>
import moment from "moment";

export default {
  name: "SingleNotification",
  props: {
    notifiDetails: Object,
  },
  methods: {
    TimeS: function (value) {
      return moment.unix(value).format("DD/MM - hh:mm");
    },
  },
};
</script>

