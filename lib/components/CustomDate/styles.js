import { StyleSheet } from 'react-native';

import {
  textPrimary,
  error,
} from '../../../config/colors';

export default StyleSheet.create({
  dateContainer: {
    flex: 1,
    marginTop: 10,
  },
  label: {
    marginTop: 10,
    fontSize: 14,
    color: textPrimary,
  },
  error: {
    fontSize: 12,
    color: error,
  },
});
