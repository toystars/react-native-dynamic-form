import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Button = ({
  label,
  onPress,
  buttonStyle,
  buttonTextStyle,
  disabled,
}) => (
  <TouchableOpacity
    style={[
      styles.buttonContainer,
      buttonStyle,
      {
        opacity: disabled ? 0.5 : 1,
      },
    ]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text
      style={[
        styles.buttonLabel,
        buttonTextStyle,
      ]}
    >
      {label}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  buttonTextStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
  ]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onPress: () => {},
  buttonStyle: {},
  buttonTextStyle: {},
  disabled: false,
};

export default Button;
