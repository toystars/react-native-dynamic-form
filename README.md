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
});

```

## Props

The component takes one compulsory prop - `form`. Other props are optional. The table below explains more.

| Prop        | Required  | Type   | Purpose  |
| ------------|-----------| -------| -------|
| form        | Yes       | Array  | array of objects representing form components to render (see Form Components for more info) |
| style        | No       | Object, Number  | Style to apply to form container. View Style |



## Form Components

#### Header

Represents a header component. All fields are required.

```
{
  key: 'hdghhdbdfgh',
  type: 'header',
  subtype: 'h1', // can be h1, h2 or h3
  label: 'Dynamic Form'
}
```



