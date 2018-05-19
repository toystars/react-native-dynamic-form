import { StyleSheet } from 'react-native';

import {
  error as errorColor,
  textPrimary,
  textInputBorderColor,
} from '../../../config/colors';

export default (
  fontSize,
  error,
  icon,
  disabled,
  showBorder,
  multiline,
) => (
  StyleSheet.create({
    container: {
      borderBottomWidth: showBorder ? 1 : 0,
      borderBottomColor: textInputBorderColor,
      opacity: disabled ? 0.7 : 1,
    },
    inputStyle: {
      height: multiline ? 70 : 50,
      borderWidth: 0,
      textAlignVertical: 'center',
      fontSize,
      color: error ? errorColor : textPrimary,
      paddingRight: icon ? 25 : 0,
    },
    iconStyle: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
    label: {
      marginTop: 10,
      fontSize: 14,
      color: textPrimary,
    },
    error: {
      fontSize: 12,
      color: errorColor,
    },
  })
);
