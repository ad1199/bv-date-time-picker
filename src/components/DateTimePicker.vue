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
    <v-card>
      <v-card-text class="pa-0">
        <v-tabs grow v-model="activeTab">
          <v-tab>
            <v-icon>mdi-calendar-month-outline</v-icon>
          </v-tab>
          <v-tab :disabled="date == null">
            <v-icon>mdi-clock-outline</v-icon>
          </v-tab>
        </v-tabs>
        <div class="pt-2">
          <div class="py-4 px-4 d-flex">
            <div v-if="date">{{ displayDate }}</div>
            <div v-else>Please select a date.</div>
            <v-spacer>&nbsp;</v-spacer>
            <div v-if="time" class="display-time" @click.prevent="showHours">
              {{ displayTime }}
            </div>
          </div>
          <v-tabs-items v-model="activeTab">
            <v-tab-item>
              <v-date-picker
                no-title
                v-model="date"
                @input="activeTab = 1"
                v-bind="datepickerProps"
              ></v-date-picker>
            </v-tab-item>
            <v-tab-item>
              <v-time-picker
                ref="timepicker"
                no-title
                v-model="time"
                v-bind="timepickerProps"
              ></v-time-picker>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </v-card-text>
      <v-card-actions class="justify-end pb-3 px-3">
        <v-btn depressed text @click.prevent="close">Cancel</v-btn>
        <v-btn
          depressed
          color="primary"
          text
          :disabled="!canSelect"
          @click.prevent="handleSubmit"
          >Done</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import moment from "moment";
export default {
  props: {
    value: String,
    textFieldProps: Object,
    datepickerProps: Object,
    timepickerProps: Object,
    displayDateFormat: {
      type: String,
      default: "MMM DD, YYYY hh:mm a",
    },
  },
  data() {
    const datetime = this.value || null;
    const date = datetime ? moment(datetime).format("YYYY-MM-DD") : null;
    const time = datetime ? moment(datetime).format("HH:mm") : null;
    return {
      show: false,
      date,
      time,
      activeTab: 0,
    };
  },
  methods: {
    handleSubmit() {
      this.close();
      this.$emit("input", `${this.date} ${this.time}:00`);
    },

    close() {
      this.show = false;
    },

    showHours() {
      if (this.$refs.timepicker) this.$refs.timepicker.selectingHour = true;
    },
  },

  watch: {
    show(show) {
      if (show) {
        if (this.value) {
          this.date = moment(this.value).format("YYYY-MM-DD");
          this.time = moment(this.value).format("HH:mm");
        }
        this.activeTab = 0;
      }
    },
    activeTab(activeTab) {
      if (activeTab === 1) {
        setTimeout(() => {
          this.showHours();
        }, 100);
      }
    },
  },

  computed: {
    displayValue() {
      if (!this.value) return this.value;
      return moment(this.value).format(this.displayDateFormat);
    },

    datetime() {
      let time = this.time ? this.time + ":00" : "00:00:00";
      return this.date ? this.date + " " + time : null;
    },

    canSelect() {
      return !!this.date && !!this.time;
    },

    displayDate() {
      if (this.date) return moment(this.date).format("YYYY, MMM DD");
      else return null;
    },

    displayTime() {
      if (this.time) return moment(this.datetime).format("hh:mm a");
      else return null;
    },
  },
};
</script>

<style scoped>
.display-time {
  cursor: pointer;
}
</style>
