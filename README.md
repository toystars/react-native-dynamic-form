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
Note: Ensure to add and configure [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) in your project before using this package.

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
| style        | No       | Object, Number  | Style to apply to form container. View Style |



## Form Components

All component fields are required, except stated otherwise.

#### Header

Represents a header component.

```
{
  key: 'hdghhdbdfgh',
  type: 'header',
  subtype: 'h1', // can be h1, h2 or h3
  label: 'Dynamic Form'
  style: {
    fontSize: 32,
    color: 'red',
  }, // optional
}
```

#### Paragraph

Represents a paragraph component.

```
{
  key: 'addsdfdvdvdd',
  type: 'paragraph',
  subtype: 'p',
  label: 'Instructions on how to fill dynamic form',
  style: {
    fontSize: 14,
  }, // optional
}
```

#### TextInput

Represents an input component.

```
{
  key: 'manshgdsuudfg',
  type: "text",
  required: true, // optional
  label: 'What is your last name?',
  placeholder: 'Last Name', // optional
  subtype: 'text', // can be text, tel, email and password
  maxlength: 30, // optional
  value: 'Salako',
  disabled: false, // optional
}
```

#### TextArea

Represents a multi-line input component.

```
{
  key: 'jahaughabdvad',
  type: 'textarea',
  label: 'Please describe yourself in not more than 400 characters',
  placeholder: 'My name is John Doe and I am...', // optional
  maxlength: 400, // optional
  required: true, // optional
  value: 'I am a software engineer with 98 years experience...',
}
```

