<template>
  <div class="hello">
    <SingleNotification
      v-for="(notification, index) in notifications"
      v-bind:key="index"
      :notifiDetails="notification"
    />
  </div>
</template>

<script>
import axios from "axios";
import SingleNotification from "@/components/SingleNotifications.vue";

export default {
  name: "NotificationList",
  components: {
    SingleNotification,
  },
  data() {
    return {
      notifications: [],
    };
  },
  beforeMount() {
    axios.get("https://api.npoint.io/5526c5a502740142f4b2").then((response) => {
      console.log(response.data.notifications);
      this.notifications = response.data.notifications;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
