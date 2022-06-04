<template>
  <v-dialog ref="dialog" v-model="show" persistent width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="displayValue"
        readonly
        v-bind="{ ...attrs, ...textFieldProps }"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      scrollable
      v-if="!showTimepicker"
      v-bind="datepickerProps"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="show = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="showTimepicker = true"> OK </v-btn>
    </v-date-picker>
    <v-time-picker v-else v-model="time" ampm-in-title>
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="show = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="handleSubmit"> OK </v-btn>
    </v-time-picker>
  </v-dialog>
</template>
<script>
import moment from "moment";
export default {
  props: {
    value: String,
    textFieldProps: Object,
    datepickerProps: Object,
  },
  data() {
    const datetime = this.value || null;
    const date = datetime ? moment(datetime).format("YYYY-MM-DD") : null;
    const time = datetime ? moment(datetime).format("HH:mm") : null;
    return {
      show: false,
      showTimepicker: false,
      date,
      time,
    };
  },
  methods: {
    handleSubmit() {
      this.show = false;
      this.$emit("input", `${this.date} ${this.time}:00`);
    },
  },

  watch: {
    show(show) {
      if (show) {
        if (this.value) {
          this.date = moment(this.value).format("YYYY-MM-DD");
          this.time = moment(this.value).format("HH:mm");
        }

        this.showTimepicker = false;
      }
    },
    date() {
      this.showTimepicker = true;
    },
  },

  computed: {
    displayValue() {
      if (!this.value) return this.value;
      return moment(this.value).format("MMM DD, YYYY hh:mm a");
    },
  },
};
</script>
