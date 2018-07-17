# react-native-dynamic-form

[![npm](https://img.shields.io/npm/v/react-native-dynamic-form.svg)](https://www.npmjs.com/package/react-native-dynamic-form) [![Downloads](https://img.shields.io/npm/dt/react-native-dynamic-form.svg)](https://www.npmjs.com/package/react-native-dynamic-form) [![Licence](https://img.shields.io/npm/l/react-native-dynamic-form.svg)](https://www.npmjs.com/package/react-native-dynamic-form)

> Dynamic form builder for React Native

### Sneak Peak

<img src="https://user-images.githubusercontent.com/16062709/40332387-dc97c3d0-5d4b-11e8-8ed7-7c8e19234de6.gif" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40332552-47eb7776-5d4c-11e8-924d-34044580c671.gif" height="500" width="300">

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

``` javascript
import React, { Component } from 'react';
import {
  StyleSheet,
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
| onFormDataChange        | No       | Function  | Returns form responses as funtion argument whenever any change occur in form |
| submitButton        | No       | Object  | Object for displaying button at the end of form. More info below |


### submitButton (prop)

Object for displaying button at the end of form. Holds configuration on button appeareance and beahaviour. See below for sample:

``` javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import DynamicForm, { buildTheme } from 'react-native-dynamic-form';

const theme = buildTheme();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DynamicForm
          form={form}
          theme={theme} // theme prop is optional and default theme is applied if theme is not provided
          submitButton={{
              action: (responses) => {
                console.log('Submit Button Responses: ', responses);
              }, // button action, takes form responses as argument, optional
              label: 'Submit', // button label, required
              buttonStyle: {
                backgroundColor: '#CCCCCC',
                borderRadius: 3,
                height: 40,
              }, // View PropTypes, optional
              buttonTextStyle: {
                fontSiz3: 18,
              }, // Text PropTypes, optional
              disabled: false, // boolean to disable button, optional
            }}
        />
      </View>
    );
  }
}
```

### _getFormResponses

Use component reference to get form responses at any point in time

``` javascript
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import DynamicForm, { buildTheme } from 'react-native-dynamic-form';


export default class App extends Component {

  getFormResponses = () => {
    const responses = this.formRef._getFormResponses();
    // use responses here...
  }

  render() {
    return (
      <View style={styles.container}>
        <DynamicForm
          ref={ref => this.formRef = ref}
          form={form}
        />
        <Button
          onPress={this.getFormResponses}
          title="Get Form Responses"
        />
      </View>
    );
  }
}
```

## Theming

A global theme object can be passed to the `Dynamic Form` component which gets applied to most of the form elements. Theming is still a work in progress and far from perfect, but it provides a basic way of customizing form elements. Theming instructions are provided below:

``` javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import { buildTheme } from 'react-native-dynamic-form';

const theme = buildTheme();

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DynamicForm
          form={form}
          theme={theme} // theme prop is optional and default theme is applied if theme is not provided
        />
      </View>
    );
  }
}
```

The code sample above builds a theme template and apply defaults configuration. This [file](config/styles.js) conatins the default values. The `defaultTheme` export in the styles config can be used as a template to build really customized theme object.

### Full customization

To fully customize form elements, the `buildTheme` export accepts three parameters in the order they appear below:

- **userColors** - Object of colors to apply to form element. See [file](config/styles.js) for exact format.

- **userFonts** - Object of fonts to apply to form element. See [file](config/styles.js) for exact format.

- **userTheme** - Complete user theme object which is a clone of `defaultTheme` export in [styles config](config/styles.js) file. This can be copied over and modified.

Below is an example of a fully customized theme builder

``` javascript
import { buildTheme } from 'react-native-dynamic-form';

const myColors = {
  primary: '#00a5ff',
  textPrimary: '#2A3C53',
  primaryDark: '#0077cb',
  error: '#FF6565',
  iconDark: 'rgba(0,0,0,0.4)',
  textInputBorderColor: '#cac8c8',
  placeholderTextColor: '#A9A9A9',
  starFillColor: '#f5a623',
  black: '#000000',
  white: '#FFFFFF',
  success: '#50e3c2',
};

const myFonts = {
  defaultFontFamily: 'Roboto', // font should already be added to project
};

const myTheme = {
  // labels
  label: {
    marginTop: 10,
    fontSize: 14,
    color: myColors.textPrimary,
  },
  // error
  error: {
    fontSize: 12,
    color: myColors.error,
  },
  // headers
  headers: {
    h1: {
      fontSize: 24,
      color: myColors.textPrimary,
      fontFamily: myFonts.defaultFontFamily,
    },
    h2: {
      fontSize: 20,
      color: myColors.textPrimary,
      fontFamily: myFonts.defaultFontFamily,
    },
    h3: {
      fontSize: 16,
      color: myColors.textPrimary,
      fontFamily: myFonts.defaultFontFamily,
    },
  },
  // paragraph
  p: {
    fontSize: 16,
    color: myColors.textPrimary,
    fontFamily: myFonts.defaultFontFamily,
  },
  // input
  input: {
    placeholderTextColor,
    iconColor: iconDark,
    style: {},
  },
  // rating
  rating: {
    starFillColor,
    remarkStyle: {
      color: myColors.starFillColor,
      fontSize: 14,
    },
  },
  // toggle
  toggle: {
    knobColor: myColors.primaryDark,
    tintColor: myColors.primary,
  },
  // select
  select: {
    tagRemoveIconColor: myColors.error,
    tagBorderColor: myColors.textInputBorderColor,
    tagTextColor: myColors.primary,
    selectedItemTextColor: myColors.primary,
    selectedItemIconColor: myColors.primary,
    itemTextColor: myColors.textPrimary,
    submitButtonColor: myColors.success,
  },
};

const theme = buildTheme(myColors, myFonts, myTheme);

// The most important paramater is the colors parameter which will be applied to all form elements.
// Other sections of the theme object will be set to their default values and provided colors applied where necessary
// Most times you will only have to do as below and leave the remaining configuration in their default state
const theme = buildTheme(myColors);
```


## Form Components

All component fields are required, except stated otherwise.

### Header

Represents a header component.

<img src="https://user-images.githubusercontent.com/16062709/40319334-b71bc844-5d1f-11e8-804c-b0faefb88e21.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40320434-a6c79a32-5d23-11e8-8c94-a279d3556509.png" height="500" width="300">

``` javascript
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


``` javascript
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

``` javascript
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

``` javascript
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

### Rating

Represents a rating component.

<img src="https://user-images.githubusercontent.com/16062709/40324093-617e9f46-5d2f-11e8-8b67-62663eb611fe.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40324095-627362b0-5d2f-11e8-9377-d15bd4e0143e.png" height="500" width="300">

``` javascript
{
  key: 'liaksunshdfjnbah',
  type: 'starRating',
  label: 'Rate your programming skill',
  maxStars: 5,
  value: 3,
  required: false, // optional
  config: {
    iconSet: 'MaterialIcons', // react-native-vector-icon icon sets
    emptyStar: 'star-border', // empty star icon
    fullStar: 'star', // full star icon
    halfStar: 'star-half', // half star icon, if enableHalfStar is set to true
    enableHalfStar: false, // enable half star
    ratingRemark: {
      1: 'Beginer',
      2: 'Enthusiast',
      3: 'Junior',
      4: 'Intermediate',
      5: 'Senior',
    },
  },
}
```

### Radio Button

Represents a radio button component.

<img src="https://user-images.githubusercontent.com/16062709/40326813-8723d514-5d38-11e8-8f71-32a4d6cc56bd.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40326814-88605ea2-5d38-11e8-88db-8e62abb1b3df.png" height="500" width="300">

``` javascript
{
  key: 'sbasgdsbdgffgf',
  type: 'radio-group',
  label: 'Favorite Programming Language',
  other: true, // displays an other input for custom data entry, optional
  values: [
    {
      label: 'JavaScript',
      value: 'javascript',
      selected: true, // selected value (can be used to preselect values too) optional
    },
    {
      label: 'Ruby',
      value: 'ruby',
    }
  ]
}
```

### CheckBox

Represents a checkbox component.

<img src="https://user-images.githubusercontent.com/16062709/40329232-cabc22ce-5d40-11e8-82d9-702516c80076.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329231-ca94f2ee-5d40-11e8-91a6-12a3840029ab.png" height="500" width="300">

``` javascript
{
  key: 'avfsragsghgdbhfg',
  type: 'checkbox-group',
  label: 'Top 3 tech companies in the world',
  other: true, // optional
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

### Toggle

Represents a toggle component.

<img src="https://user-images.githubusercontent.com/16062709/40329117-74a97562-5d40-11e8-9d78-5c337b8f644b.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329121-75c2bf44-5d40-11e8-9ead-c78d00bda337.png" height="500" width="300">

``` javascript
{
  key: 'anhsgabgbfnhhdnbf',
  type: 'checkbox-group',
  label: 'Sorting Algorithms familiar with',
  toggle: true, // renders a toggle instead of checkbox, optional
  other: true, // renders an other field for free text entry
  values: [
    {
      label: 'Bubble Sort',
      value: 'bubble sort',
      selected: true, // selected value (can be used to preselect values too) optional
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
},
```

### Date

Represents a date component.

<img src="https://user-images.githubusercontent.com/16062709/40329401-5cf5faa2-5d41-11e8-9565-6bf3eef9f559.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329400-5cd312c6-5d41-11e8-8f29-c7126fabef68.png" height="500" width="300">

<img src="https://user-images.githubusercontent.com/16062709/40329467-8da0530a-5d41-11e8-9406-cd962aaee986.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329466-8d71c4ea-5d41-11e8-8d83-ceefe398ff61.png" height="500" width="300">

``` javascript
{
  key: 'aabnstfavahbdaas',
  type: 'date',
  label: 'Date of Birth',
  value: '26-11-2018',
  placeholder: '25-05-2018', // optional
  dateFormat: 'DD-MM-YYYY', // optional
  disabled: false, // optional
}
```

### Number Input

Represents a number input component.

<img src="https://user-images.githubusercontent.com/16062709/40329649-23a37c42-5d42-11e8-96a1-e4a7f62047d6.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329651-253e01ee-5d42-11e8-91cd-72d2fa3e6a64.png" height="500" width="300">

``` javascript
{
  key: 'manbsgvagsdbdhh',
  type: 'number',
  label: 'Number of Data Structure and Algorithm books read',
  placeholder: 0, // optional
  value: 0,
  min: 0, // minimum allowed value, optional
  max: 100, // maximum allowed value, optional
  step: 2, // value step, optional, defaults to 1
  disabled: false, // optional
  directTextEdit: false, // enable or disable free form data entry, optional, defaults to false
}
```

### Select

Represents a select component.

<img src="https://user-images.githubusercontent.com/16062709/40329930-32f3c1a6-5d43-11e8-985f-eff525a8c6ff.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329932-33fbb7a2-5d43-11e8-9cdd-9e82ab7ecb10.png" height="500" width="300">

<img src="https://user-images.githubusercontent.com/16062709/40329980-6712f146-5d43-11e8-8511-73396eb56fc4.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40329983-68a0a4f4-5d43-11e8-9c1c-2c61e7a9887d.png" height="500" width="300">

<img src="https://user-images.githubusercontent.com/16062709/40330816-134150d2-5d46-11e8-903d-30ba8ba902b2.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40330819-14f6224a-5d46-11e8-9fed-bfb1db28ea17.png" height="500" width="300">

<img src="https://user-images.githubusercontent.com/16062709/40330963-a6e571c4-5d46-11e8-8eef-384873fa35e4.png" height="500" width="300"> <img src="https://user-images.githubusercontent.com/16062709/40330964-a81610c6-5d46-11e8-8d3b-540d3f78b5f7.png" height="500" width="300">

``` javascript
{
  key: 'nabsgsgdhyshdhf',
  type: 'select',
  label: 'Languages Spoken',
  multiple: false, // enable multiple selection and displays selected items as tags, optional
  searchInputPlaceholder: 'Search Languages...',
  values: [
    {
      label: 'Yoruba',
      value: 'yoruba',
      selected: true, // selected value (can be used to preselect values too) optional
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

## Contributing

Contributions are **welcome** and will be fully **credited**.

Contributions are accepted via Pull Requests on [Github](https://github.com/toystars/react-native-dynamic-form).


### Pull Requests

- **Document any change in behaviour** - Make sure the `README.md` and any other relevant documentation are kept up-to-date.

- **Consider our release cycle** - We try to follow [SemVer v2.0.0](http://semver.org/). Randomly breaking public APIs is not an option.

- **Create feature branches** - Don't ask us to pull from your master branch.

- **One pull request per feature** - If you want to do more than one thing, send multiple pull requests.

- **Send coherent history** - Make sure each individual commit in your pull request is meaningful. If you had to make multiple intermediate commits while developing, please [squash them](http://www.git-scm.com/book/en/v2/Git-Tools-Rewriting-History#Changing-Multiple-Commit-Messages) before submitting.


## Issues

Check [issues](https://github.com/toystars/react-native-dynamic-form/issues) for current issues.

## Contributors


## License

The MIT License (MIT). Please see [LICENSE](LICENSE) for more information.

