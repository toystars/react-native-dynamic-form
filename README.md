# react-native-dynamic-form

[![npm](https://img.shields.io/npm/v/react-native-dynamic-form.svg)](https://www.npmjs.com/package/react-native-dynamic-form) [![Downloads](https://img.shields.io/npm/dt/react-native-dynamic-form.svg)](https://www.npmjs.com/package/react-native-dynamic-form) [![Licence](https://img.shields.io/npm/l/react-native-dynamic-form.svg)](https://www.npmjs.com/package/react-native-dynamic-form)

> Dynamic form builder for React Native

## Installation

``` bash
$ npm install react-native-dynamic-form --save
```
or use yarn

``` bash
$ yarn add react-native-dynamic-form
```

## Usage
Note: Ensure to add and configure [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) and [react-native-dialogs](https://github.com/aakashns/react-native-dialogs) in your project before using this package.

You can clone and try out the [sample](https://github.com/toystars/dynamic_form_sample) app.

Sample usage:

```javascript
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import DynamicForm from 'react-native-dynamic-form';

const form = [
  {
    key: 'hdghhdbdfgh',
    type: 'header',
    subtype: 'h1',
    label: 'Dynamic Form',
  },
];

export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <DynamicForm
          form={form}
          style={styles.formContainer}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  formContainer: {
    marginTop: 10,
  },
});

```

## Props

The component takes one compulsory prop - `form`. Other props are optional. The table below explains more.

| Prop        | Required  | Type   | Purpose  |
| ------------|-----------| -------| -------|
| form        | Yes       | Array  | array of objects representing form components to render (see Form Components for more info) |
| theme        | No       | Object | Theme to apply to entire dynamic form elements. See below for more info |
| style        | No       | Object, Number  | Style to apply to form container. View Style |




## Form Components

All component fields are required, except stated otherwise.

### Header

Represents a header component.

<img src="https://user-images.githubusercontent.com/16062709/40319334-b71bc844-5d1f-11e8-804c-b0faefb88e21.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40320434-a6c79a32-5d23-11e8-8c94-a279d3556509.png" height="500" width="300">

```
{
  key: 'hdghhdbdfgh',
  type: 'header',
  subtype: 'h2', // one of h1, h2 and h3
  label: 'Dynamic Form',
  style: {
    fontSize: 14,
  }, // optional
}
```

### Paragraph

Represents a paragraph component.

<img src="https://user-images.githubusercontent.com/16062709/40320298-18d54bf2-5d23-11e8-8074-cc158379afcb.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40320297-18a7c876-5d23-11e8-8d18-08620bc7d626.png" height="500" width="300">


```
{
  key: 'addsdfdvdvdd',
  type: 'paragraph',
  label: 'Instructions on how to fill dynamic form',
  style: {
    fontSize: 15,
  }, // optional
}
```

### TextInput

Represents an input component.

<img src="https://user-images.githubusercontent.com/16062709/40321119-f07579e0-5d25-11e8-9e63-53bbc443cd9a.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40321118-f04db27a-5d25-11e8-9872-3f46e6ecd825.png" height="500" width="300">

```
{
  key: 'manshgdsuudfg',
  type: "text",
  required: true, // optional
  label: 'What is your last name?',
  placeholder: 'Last Name', // optional
  subtype: 'text', // one of text, tel, email and password
  maxlength: 30, // optional
  value: 'Salako', // optional
  disabled: false, // optional,
  icon: 'lock', // optional
  validationFunc: (value) => {
    // do validation here and return bool status
  }, // optional
}
```

### TextArea

Represents a multi-line input component.

<img src="https://user-images.githubusercontent.com/16062709/40323718-2d8d7ec4-5d2e-11e8-9d08-374d5d77ac27.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40323721-2edbcf06-5d2e-11e8-9bd6-c1922ef7c525.png" height="500" width="300">

```
{
  key: 'jahaughabdvad',
  type: 'textarea',
  label: 'Please describe yourself in not more than 400 characters',
  placeholder: "My name is John Doe and I am...", // optional
  maxlength: 400, // optional
  required: true, // optional
  value: '', // optional
  validationFunc: (value) => {
    // do validation here and return bool status
  }, // optional
}
```

#### Rating

Represents a rating component.

```
{
  key: 'liaksunshdfjnbah',
  type: 'starRating',
  label: 'Rate your programming skill',
  maxStars: 7,
  value: 1,
  required: true,
  config: {
    iconSet: 'MaterialIcons',
    emptyStar: 'star-border',
    fullStar: 'star',
    halfStar: 'star-half',
    starFillColor: '#f5a623',
    enableHalfStar: false,
    ratingRemark: {
      1: 'Beginer',
      2: 'Enthusiast',
      3: 'Junior',
      4: 'Intermediate',
      5: 'Senior',
      6: 'Team Lead',
      7: 'god like',
    },
  },
}
```

#### Radio Button

Represents a radio button component.

```
{
  key: 'sbasgdsbdgffgf',
  type: 'radio-group',
  label: 'Favorite Programming Language',
  other: true, // displays an other input for custom data entry
  values: [
    {
      label: 'JavaScript',
      value: 'javascript',
      selected: true, // preselected value
    },
    {
      label: 'Ruby',
      value: 'ruby',
    }
  ]
}
```

#### CheckBox

Represents a checkbox component.

```
{
  key: 'avfsragsghgdbhfg',
  type: 'checkbox-group',
  label: 'Top 3 tech companies in the world',
  other: true,
  values: [
    {
      label: 'Google',
      value: 'google',
    },
    {
      label: 'Apple',
      value: 'apple',
    },
    {
      label: 'Facebook',
      value: 'facebook',
      selected: true,
    },
    {
      label: 'Microsoft',
      value: 'microsoft',
    },
    {
      label: 'Amazon',
      value: 'amazon',
    },
  ]
}
```

#### Toggle

Represents a toggle component.

```
{
  key: 'anhsgabgbfnhhdnbf',
  type: 'checkbox-group',
  label: 'Sorting Algorithms familiar with',
  toggle: true,
  other: true,
  values: [
    {
      label: 'Bubble Sort',
      value: 'bubble sort',
      selected: true,
    },
    {
      label: 'Heapsort',
      value: 'heapsort',
    },
    {
      label: 'Insertion Sort',
      value: 'insertion sort',
    },
    {
      label: 'Merge Sort',
      value: 'merge sort',
    },
    {
      label: 'Quicksort',
      value: 'quicksort',
    },
  ]
}
```

#### Date

Represents a date component.

```
{
  key: 'aabnstfavahbdaas',
  type: 'date',
  label: 'Date of Birth',
  value: '26-11-2018',
  placeholder: '25-05-2018',
  dateFormat: 'DD-MM-YYYY',
  disabled: false,
}
```

#### Number Input

Represents a number input component.

```
{
  key: 'manbsgvagsdbdhh',
  type: 'number',
  label: 'Number of Data Structure and Algorithm books read',
  placeholder: 0,
  value: 0,
  min: 0,
  max: 100,
  step: 2,
  disabled: false,
  directTextEdit: false,
}
```

#### Select

Represents a select component.

```
{
  key: 'nabsgsgdhyshdhf',
  type: 'select',
  label: 'Languages Spoken',
  multiple: false,
  searchInputPlaceholder: 'Search Languages...',
  values: [
    {
      label: 'Yoruba',
      value: 'yoruba',
    },
    {
      label: 'Igbo',
      value: 'igbo',
    },
    {
      label: 'Hausa',
      value: 'hausa',
    },
    {
      label: 'English',
      value: 'english',
    },
    {
      label: 'Spanish',
      value: 'spanish',
    },
    {
      label: 'French',
      value: 'french',
    },
  ]
}
```
