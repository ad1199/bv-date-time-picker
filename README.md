# bv-date-time-picker

## Vuetify Date Time Picker

### Installation

```
npm install --save bv-date-time-picker
```

### Usage

```js
import Vue from "vue";
import DateTimePicker from "bv-date-time-picker";

Vue.use(DateTimePicker);
```

### Props

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th>Default Value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>value</td>
<td>String</td>
<td>null</td>
<td>Datetime string in <code>YYYY-MM-DD HH:mm:ss</code> format</td>
</tr>
<tr>
<td>textFieldProps</td>
<td>Object</td>
<td>null</td>
<td>Object of all the props of <code>v-text-field</code> component</td>
</tr>
<tr>
<td>datepickerProps</td>
<td>Object</td>
<td>null</td>
<td>Object of all the props of <code>v-date-picker</code> component</td>
</tr>
</tbody>
</table>

### Events

<table width="100%">
<thead>
<tr>
<th>Name</th>
<th>Arguments</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>Input</td>
<td>value (String)</td>
<td>Date string</td>
</tr>
</tbody>
</table>


###Updates
- Added tabs
- Added timepicker Props
- Added display date format