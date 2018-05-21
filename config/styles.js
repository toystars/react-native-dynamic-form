import { Platform } from 'react-native';
import _ from 'lodash';

import {
  primary,
  textPrimary,
  error,
  iconDark,
  textInputBorderColor,
  placeholderTextColor,
  starFillColor,
  black,
  white,
} from './colors';

const fontFamily = Platform.OS === 'android' ? 'Roboto' : 'system font';

export const defaultColors = {
  primary,
  textPrimary,
  error,
  iconDark,
  textInputBorderColor,
  placeholderTextColor,
  starFillColor,
  black,
  white,
};

export const defaultFonts = {
  defaultFontFamily: fontFamily,
};

export const defaultTheme = {
  // headers
  headers: {
    h1: {
      fontSize: 24,
      color: textPrimary,
      fontFamily,
    },
    h2: {
      fontSize: 20,
      color: textPrimary,
      fontFamily,
    },
    h3: {
      fontSize: 16,
      color: textPrimary,
      fontFamily,
    },
  },
  // paragraph
  p: {
    fontSize: 16,
    color: textPrimary,
  },
  // input
  input: {
    placeholderTextColor,
    iconColor: iconDark,
    style: {},
  },
};

export const buildTheme = (userColors = {}, userFonts = {}, userTheme = {}) => {
  // merge colors
  const mergedColors = {
    ...defaultColors,
    ...userColors,
  };
  // merge fonts
  const mergedFonts = {
    ...defaultFonts,
    ...userFonts,
  };

  return {
    colors: mergedColors,
    fonts: mergedFonts,
    
    // component related theme
    // headers
    headers: {
      h1: {
        fontSize: 28,
        color: mergedColors.textPrimary,
        fontFamily: mergedFonts.defaultFontFamily,
        ...(_.get(userTheme, 'headers.h1')),
      },
      h2: {
        fontSize: 24,
        color: mergedColors.textPrimary,
        fontFamily: mergedFonts.defaultFontFamily,
        ...(_.get(userTheme, 'headers.h2')),
      },
      h3: {
        fontSize: 20,
        color: mergedColors.textPrimary,
        fontFamily: mergedFonts.defaultFontFamily,
        ...(_.get(userTheme, 'headers.h3')),
      },
    },
    // paragraph
    p: {
      fontSize: 16,
      color: mergedColors.textPrimary,
      ...(_.get(userTheme, 'p')),
    },
    // input
    input: {
      placeholderTextColor: mergedColors.placeholderTextColor,
      iconColor: mergedColors.iconDark,
      ...(_.get(userTheme, 'input')),
    },
  };
};

export default {};
