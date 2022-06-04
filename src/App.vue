<template>
  <v-app>
    <date-time-picker v-model="date"></date-time-picker>
  </v-app>
</template>

<script>
import DateTimePicker from "./components/DateTimePicker.vue";
import moment from "moment";

export default {
  name: "App",
  components: {
    DateTimePicker,
  },
  data() {
    return {
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
  },
};
</script>
