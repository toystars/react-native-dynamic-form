import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Paragraph = ({ label, style }, { theme }) => {
  const paragraphStyle = theme.p;
  return (
    <Text style={[paragraphStyle, style]}>
      {label}
    </Text>
  );
};

Paragraph.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Paragraph.defaultProps = {
  style: {},
};

Paragraph.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Paragraph;
