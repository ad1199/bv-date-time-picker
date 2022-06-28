<template>
  <v-app>
    <v-container>
      <h4>Vuetify Date Time Picker Demo</h4>
      <date-time-picker
        v-model="date"
        :text-field-props="textFieldProps"
      ></date-time-picker>
    </v-container>
  </v-app>
</template>

<script>
import DateTimePicker from "./components/DateTimePicker.vue";
// import moment from "moment";

export default {
  name: "App",
  components: {
    DateTimePicker,
  },
  data() {
    return {
      date: null,
      textFieldProps: {
        prependInnerIcon: "mdi-calendar-month-outline",
        placeholder: "Choose Date",
      },
      // date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
  },
};
</script>
