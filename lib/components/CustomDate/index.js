import React, { PureComponent } from 'react';
import {
  DatePickerAndroid,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';

import CustomTextInput from '../CustomInput';

export default class CustomDate extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    placeholder: PropTypes.string,
    onDateChange: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    value: '',
    placeholder: '',
    onDateChange: () => {},
    disabled: false,
    error: false,
  };

  pickDate = async () => {
    try {
      const { value, onDateChange } = this.props;
      const {
        action,
        year,
        month,
        day,
      } = await DatePickerAndroid.open({
        date: moment(value, 'DD-MM-YYYY').toDate(),
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        const momentDate = moment(`${day}-${month + 1}-${year}`, 'DD-MM-YYYY');
        onDateChange(momentDate.format('DD-MM-YYYY'));
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  render() {
    const {
      label,
      value,
      placeholder,
      disabled,
      error,
    } = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          this.pickDate();
        }}
      >
        <CustomTextInput
          disabled
          label={label}
          value={value}
          placeholder={placeholder}
          error={error}
        />
      </TouchableOpacity>
    );
  }
}
