import {
  textPrimary,
  error,
  placeholderTextColor,
} from '../../../config/colors';

export default {
  label: {
    marginTop: 10,
    fontSize: 14,
    color: textPrimary,
  },
  inputContainer: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: placeholderTextColor,
    borderWidth: 1,
    borderRadius: 3,
  },
  input: {
    flex: 1,
    fontSize: 20,
    textAlign: 'left',
    color: textPrimary,
    paddingLeft: 10,
    marginRight: 10,
    opacity: 0.8,
  },
  controllersContainer: {
    padding: 5,
  },
  error: {
    fontSize: 12,
    color: error,
  },
};
