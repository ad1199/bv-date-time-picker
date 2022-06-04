import DateTimePicker from "./src/components/DateTimePicker";

export default {
  install(Vue, options) {
    Vue.component("bv-date-time-picker", DateTimePicker);
  },
};
