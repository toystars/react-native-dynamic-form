import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {
    marginBottom: 10,
  },
});

// dynamic form styles
const styles = {
  h1: {
    fontSize: 24,
  },
  h2: {
    fontSize: 20,
  },
  h3: {
    fontSize: 16,
  },
};

export const getStyle = {
  getHeaderStyle: subtype => (
    styles[subtype]
  ),
};

