// main package
import DynamicForm from './lib/DynamicForm';

// theming config
import {
  defaultColors as colors,
  defaultFonts as fonts,
  defaultTheme as theme,
  buildTheme as builder,
} from './config/styles';

export const defaultColors = colors;
export const defaultFonts = fonts;
export const defaultTheme = theme;
export const buildTheme = builder;

export default DynamicForm;
