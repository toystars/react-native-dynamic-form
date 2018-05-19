import { StyleSheet } from 'react-native';

import { textPrimary } from '../../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: textPrimary,
  },
});

// dynamic form styles
const styles = {
  h1: {
    fontSize: 24,
    color: textPrimary,
  },
  h2: {
    fontSize: 20,
    color: textPrimary,
  },
  h3: {
    fontSize: 16,
    color: textPrimary,
  },
};

export const getStyle = {
  getHeaderStyle: subtype => (
    styles[subtype]
  ),
};

