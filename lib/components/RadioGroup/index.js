import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { RadioButton } from 'react-native-material-ui';
import _ from 'lodash';

import LabelError from '../LabelError';
import CustomInput from '../CustomInput';

import styles from './styles';

export default class RadioGroup extends Component {
  static propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    onRadioValueChanged: PropTypes.func,
    other: PropTypes.bool,
    value: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    onRadioValueChanged: () => {},
    other: false,
    value: '',
    error: false,
  };

  state = {
    selectedValue: '',
    textValue: '',
  };

  onCheck = (value) => {
    const { onRadioValueChanged } = this.props;
    const { selectedValue } = this.state;
    const newValue = value.value;
    if (newValue !== 'other') {
      this.setState({
        selectedValue: newValue,
        textValue: '',
      });
      onRadioValueChanged(newValue);
    } else {
      if (selectedValue !== 'other') {
        onRadioValueChanged('');
      }
      this.setState({
        selectedValue: newValue,
      });
    }
  }

  onOtherTextChanged = (text) => {
    const { onRadioValueChanged } = this.props;
    onRadioValueChanged(text);
  };

  renderOtherInput = () => {
    const {
      selectedValue,
      textValue,
    } = this.state;
    if (selectedValue === 'other') {
      return (
        <CustomInput
          value={textValue}
          keyboardType="default"
          validation={v => v}
          onChangeText={this.onOtherTextChanged}
        />
      );
    }
    return null;
  };

  render() {
    const {
      label,
      options,
      error,
      other,
    } = this.props;
    const { selectedValue } = this.state;
    const propValue = this.props.value;
    return (
      <View>
        <LabelError
          label={label}
          error={error}
        />
        <View style={styles.radioContainer}>
          {
            _.map(options, value => (
              <RadioButton
                key={_.get(value, 'value')}
                label={_.get(value, 'label')}
                checked={propValue === value.value}
                value={_.get(value, 'value')}
                onSelect={() => {}}
                onCheck={(checked) => {
                  this.onCheck(value, checked);
                }}
              />
            ))
          }
          {
            other
            ?
              <View style={styles.otherRow}>
                <RadioButton
                  key="other"
                  label="Other"
                  checked={selectedValue === 'other'}
                  value="other"
                  onSelect={() => {}}
                  onCheck={(checked) => {
                    this.onCheck({
                      value: 'other',
                      label: 'Other',
                    }, checked);
                  }}
                />
                <View style={{ flex: 1 }}>
                  {this.renderOtherInput()}
                </View>
              </View>
              :
              null
          }
        </View>
      </View>
    );
  }
}
