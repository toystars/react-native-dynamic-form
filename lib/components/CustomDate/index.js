import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

import LabelError from '../LabelError';

import styles from './styles';

export default class CustomDate extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    onDateChange: PropTypes.func,
    disabled: PropTypes.bool,
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
    dateFormat: PropTypes.string,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    value: '',
    placeholder: '',
    onDateChange: () => {},
    disabled: false,
    minDate: null,
    maxDate: null,
    dateFormat: 'DD-MM-YYYY',
    error: false,
  };

  onDateChange = (date) => {
    const { onDateChange } = this.props;
    onDateChange(date);
  }

  render() {
    const {
      label,
      value,
      placeholder,
      disabled,
      minDate,
      maxDate,
      dateFormat,
      error,
    } = this.props;
    const moreOptions = {};
    if (minDate) {
      moreOptions.minDate = minDate;
    }
    if (maxDate) {
      moreOptions.maxDate = maxDate;
    }
    return (
      <View>
        <LabelError
          label={label}
          error={error}
        />
        <DatePicker
          {...moreOptions}
          style={styles.dateContainer}
          date={value}
          mode="date"
          placeholder={placeholder}
          format={dateFormat}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          disabled={disabled}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={this.onDateChange}
        />
      </View>
    );
  }
}
