import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Switch,
} from 'react-native';
import PropTypes from 'prop-types';
import { Checkbox } from 'react-native-material-ui';
import _ from 'lodash';

import LabelError from '../LabelError';
import CustomInput from '../CustomInput';

import styles from './styles';

export default class CheckboxGroup extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    options: PropTypes.array.isRequired,
    onCheckboxValueChanged: PropTypes.func,
    value: PropTypes.any,
    other: PropTypes.bool,
    toggle: PropTypes.bool,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    onCheckboxValueChanged: () => { },
    other: false,
    toggle: false,
    value: {
      regular: [],
    },
    error: false,
  };

  static contextTypes = {
    theme: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedValues: this.props.value,
    };
  }

  onOtherTextChanged = (text) => {
    const { onCheckboxValueChanged } = this.props;
    const { selectedValues } = this.state;
    const clonedValues = _.cloneDeep(selectedValues);
    clonedValues.other.value = text;
    this.setState({
      selectedValues: clonedValues,
    }, () => {
      onCheckboxValueChanged(clonedValues);
    });
  };

  onCheckChanged = (value, checked) => {
    const { onCheckboxValueChanged } = this.props;
    const { selectedValues } = this.state;
    const clonedValues = _.cloneDeep(selectedValues);
    if (checked) {
      if (value === 'other') {
        clonedValues.other = {
          value: '',
        };
      } else {
        clonedValues.regular.push(value);
      }
    } else if (value === 'other') {
      // remove other field from state
      delete clonedValues.other;
    } else {
      // remove selected item from regular
      const index = clonedValues.regular.indexOf(value);
      if (index !== -1) {
        clonedValues.regular.splice(index, 1);
      }
    }
    this.setState({
      selectedValues: clonedValues,
    }, () => {
      onCheckboxValueChanged(clonedValues);
    });
  };

  renderOtherInput = () => {
    const { selectedValues } = this.state;
    if (selectedValues.other) {
      return (
        <CustomInput
          keyboardType="default"
          validation={v => v}
          onChangeText={this.onOtherTextChanged}
        />
      );
    }
    return null;
  };

  render() {
    const {
      label,
      options,
      other,
      toggle,
      error,
    } = this.props;
    const { theme } = this.context;
    const propsValue = this.props.value;
    return (
      <View>
        <LabelError
          label={label}
          error={error}
        />
        <View style={styles.checkboxContainer}>
          {
            _.map(options, value => (
              toggle
              ?
                <View
                  style={[
                    styles.switchRow,
                    {
                      paddingTop: toggle ? 10 : 0,
                    },
                  ]}
                  key={`${_.get(value, 'value')}`}
                >
                  <Switch
                    onValueChange={(checked) => {
                      this.onCheckChanged(_.get(value, 'value'), checked);
                    }}
                    thumbTintColor={theme.toggle.knobColor}
                    onTintColor={theme.toggle.tintColor}
                    value={propsValue.regular.indexOf(_.get(value, 'value')) !== -1}
                  />
                  <Text style={styles.toggleText}>
                    {_.get(value, 'label')}
                  </Text>
                </View>
                :
                <View key={`${_.get(value, 'value')}`}>
                  <Checkbox
                    label={_.get(value, 'label')}
                    value={_.get(value, 'value')}
                    checked={propsValue.regular.indexOf(_.get(value, 'value')) !== -1}
                    onCheck={(checked) => {
                      this.onCheckChanged(_.get(value, 'value'), checked);
                    }}
                  />
                </View>
            ))
          }
          {
            other
            ?
              <View style={styles.otherRow}>
                {
                  toggle
                  ?
                    <View style={styles.switchRow}>
                      <Switch
                        thumbTintColor={theme.toggle.knobColor}
                        onTintColor={theme.toggle.tintColor}
                        onValueChange={(checked) => {
                          this.onCheckChanged('other', checked);
                        }}
                        value={!!propsValue.other}
                      />
                      <Text style={styles.toggleText}>
                        Other
                      </Text>
                    </View>
                    :
                    <Checkbox
                      label="Other"
                      value="other"
                      checked={!!propsValue.other}
                      onCheck={(checked) => {
                        this.onCheckChanged('other', checked);
                      }}
                    />
                }
                <View style={{ flex: 1 }}>
                  {this.renderOtherInput()}
                </View>
              </View>
              :
              null
          }
        </View>
      </View>
    );
  }
}
