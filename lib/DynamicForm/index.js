import React, { Component } from 'react';
import {
  View,
  Text,
  // TouchableOpacity,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

import styles, { getStyle } from './styles';

export default class DynamicForm extends Component {
  static propTypes = {
    form: PropTypes.array.isRequired,
  };

  getFormElementLabel = item => (
    `${item.label} ${item.required ? '*' : ''}`
  );

  renderForm = () => {
    const { form } = this.props;
    return _.map(form, (item) => {
      const {
        key,
        type,
        subtype,
        style,
      } = item;
      const label = this.getFormElementLabel(item);
      // const hasError = errors.indexOf(key) !== -1 && this.submitTriggered;
      switch (type) {
        case 'header':
          const customStyle = getStyle.getHeaderStyle(subtype);
          return (
            <View key={key} style={styles.row}>
              <Text style={[customStyle, style]}>
                {label}
              </Text>
            </View>
          );
        // case 'paragraph':
        //   return (
        //     <View key={key} style={styles.row}>
        //       <Text style={styles.paragraph}>
        //         {label}
        //       </Text>
        //     </View>
        //   );
        // case 'text':
        //   const moreOptions = {};
        //   if (element.maxlength) {
        //     moreOptions.maxLength = Number(element.maxlength);
        //   }
        //   return (
        //     <View key={key} style={styles.row}>
        //       <CustomInput
        //         {...moreOptions}
        //         onChangeText={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         value={this.getFormElementValue(_.get(form, '_id'), element)}
        //         label={label}
        //         keyboardType={this.getInputType(_.get(element, 'subtype'))}
        //         validation={v => v}
        //         masked
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'textarea':
        //   const textAreaOptions = {};
        //   if (element.maxlength) {
        //     textAreaOptions.maxLength = Number(element.maxlength);
        //   }
        //   return (
        //     <View key={key} style={styles.row}>
        //       <CustomInput
        //         {...textAreaOptions}
        //         onChangeText={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         multiline
        //         value={this.getFormElementValue(_.get(form, '_id'), element)}
        //         label={label}
        //         keyboardType={this.getInputType(_.get(element, 'subtype'))}
        //         validation={v => v}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'starRating':
        //   return (
        //     <View key={key} style={styles.row}>
        //       <Rating
        //         starCount={(() => {
        //           const starCount = Number(this.getFormElementValue(_.get(form, '_id'), element));
        //           if (isNaN(starCount)) {
        //             return 0;
        //           }
        //           return starCount > 5 ? 0 : starCount;
        //         })()}
        //         label={label}
        //         onStarRatingChange={(starCount) => {
        //           this.updateFormElement(starCount, form);
        //         }}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'radio-group':
        //   const radioOptions = {};
        //   if (element.other) {
        //     radioOptions.other = element.other;
        //   }
        //   return (
        //     <View key={key} style={styles.row}>
        //       <RadioGroup
        //         {...radioOptions}
        //         label={label}
        //         options={_.get(element, 'values')}
        //         value={this.getFormElementValue(_.get(form, '_id'), element)}
        //         onRadioValueChanged={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'checkbox-group':
        //   const checkOptions = {};
        //   if (element.inline) {
        //     checkOptions.inline = element.inline;
        //   }
        //   if (element.other) {
        //     checkOptions.other = element.other;
        //   }
        //   if (element.toggle) {
        //     checkOptions.toggle = element.toggle;
        //   }
        //   return (
        //     <View key={key} style={styles.row}>
        //       <CheckboxGroup
        //         {...checkOptions}
        //         label={label}
        //         options={_.get(element, 'values')}
        //         onCheckboxValueChanged={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         value={this.getFormElementValue(_.get(form, '_id'), element)}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'date':
        //   return (
        //     <View key={key} style={styles.row}>
        //       <CustomDate
        //         placeholder={_.get(element, 'placeholder')}
        //         label={label}
        //         value={this.getFormElementValue(_.get(form, '_id'), element)}
        //         onDateChange={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'select':
        //   return (
        //     <View key={key} style={styles.row}>
        //       <Select
        //         data={_.get(element, 'values')}
        //         label={label}
        //         value={this.getFormElementValue(_.get(form, '_id'), element)}
        //         onSelect={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        // case 'number':
        //   const numberOptions = {};
        //   if (element.max) {
        //     numberOptions.max = Number(element.max);
        //   }
        //   if (element.min) {
        //     numberOptions.min = Number(element.min);
        //   }
        //   if (element.step) {
        //     numberOptions.step = Number(element.step);
        //   }
        //   return (
        //     <View key={key} style={styles.row}>
        //       <NumberSelector
        //         {...numberOptions}
        //         label={label}
        //         onNumberChanged={(value) => {
        //           this.updateFormElement(value, form);
        //         }}
        //         value={(() => {
        //           const number = Number(this.getFormElementValue(_.get(form, '_id'), element));
        //           if (isNaN(number)) {
        //             return numberOptions.min || 0;
        //           }
        //           if (element.min && number < element.min) {
        //             return numberOptions.min;
        //           }
        //           if (element.max && number > element.max) {
        //             return numberOptions.max;
        //           }
        //           return number;
        //         })()}
        //         error={hasError}
        //       />
        //     </View>
        //   );
        default:
          return null;
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderForm()}
        </ScrollView>
      </View>
    );
  }
}
