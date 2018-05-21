import { Platform } from 'react-native';
import _ from 'lodash';

import {
  primary,
  primaryDark,
  textPrimary,
  error,
  iconDark,
  textInputBorderColor,
  placeholderTextColor,
  starFillColor,
  black,
  white,
  success,
} from './colors';

const fontFamily = Platform.OS === 'android' ? 'Roboto' : 'system font';

export const defaultColors = {
  primary,
  textPrimary,
  primaryDark,
  error,
  iconDark,
  textInputBorderColor,
  placeholderTextColor,
  starFillColor,
  black,
  white,
  success,
};

export const defaultFonts = {
  defaultFontFamily: fontFamily,
};

export const defaultTheme = {
  // labels
  label: {
    marginTop: 10,
    fontSize: 14,
    color: textPrimary,
  },
  // error
  error: {
    fontSize: 12,
    color: error,
  },
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
  // rating
  rating: {
    starFillColor,
    remarkStyle: {
      color: starFillColor,
      fontSize: 14,
    },
  },
  // toggle
  toggle: {
    knobColor: primaryDark,
    tintColor: primary,
  },
  // select
  select: {
    tagRemoveIconColor: error,
    tagBorderColor: textInputBorderColor,
    tagTextColor: primary,
    selectedItemTextColor: primary,
    selectedItemIconColor: primary,
    itemTextColor: textPrimary,
    submitButtonColor: success,
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

    // labels
    label: {
      marginTop: 10,
      fontSize: 14,
      color: mergedColors.textPrimary,
      ...(_.get(userTheme, 'label')),
    },
    // error
    error: {
      fontSize: 12,
      color: mergedColors.error,
      ...(_.get(userTheme, 'error')),
    },
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
    // rating
    rating: {
      starFillColor: mergedColors.starFillColor,
      remarkStyle: {
        color: mergedColors.starFillColor,
        fontSize: 14,
      },
      ...(_.get(userTheme, 'rating')),
    },
    // toggle
    toggle: {
      knobColor: mergedColors.primaryDark,
      tintColor: mergedColors.primary,
      ...(_.get(userTheme, 'toggle')),
    },
    // select
    select: {
      tagRemoveIconColor: mergedColors.error,
      tagBorderColor: mergedColors.primary,
      tagTextColor: mergedColors.primaryDark,
      selectedItemTextColor: mergedColors.primary,
      selectedItemIconColor: mergedColors.primary,
      itemTextColor: mergedColors.textPrimary,
      submitButtonColor: mergedColors.success,
      ...(_.get(userTheme, 'select')),
    },
  };
};

export default {};
