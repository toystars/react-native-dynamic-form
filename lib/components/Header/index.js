import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Header = ({ label, subType, style }, { theme }) => {
  const headerTheme = theme.headers;
  const headerStyle = _.get(headerTheme, subType);
  return (
    <Text style={[headerStyle, style]}>
      {label}
    </Text>
  );
};

Header.propTypes = {
  label: PropTypes.string.isRequired,
  subType: PropTypes.string.isRequired,
  style: PropTypes.object,
};

Header.defaultProps = {
  style: {},
};

Header.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Header;
