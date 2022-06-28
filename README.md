## Vuetify Date Time Picker

### Screenshot

<a href="https://assets.maharjanarun.com.np/images/bv-date-time-picker-preview.jpg" target="_blank">
<img src="https://assets.maharjanarun.com.np/images/bv-date-time-picker-preview.jpg" alt="Vuetify Date Time Picker Preview" style="height: auto; max-width:250px;"/>
</a>

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
<td>timepickerProps</td>
<td>Object</td>
<td>null</td>
<td>Object of all the props of <code>v-time-picker</code> component</td>
</tr>
<tr>
<td>textFieldProps</td>
<td>Object</td>
<td>null</td>
<td>Object of all the props of <code>v-text-field</code> component</td>
</tr>
<tr>
<td>displayDateFormat</td>
<td>Object</td>
<td>MMM DD, YYYY hh:mm a</td>
<td>Date time format used in text field to display the date.</td>
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