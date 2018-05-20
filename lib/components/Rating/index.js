import React, { PureComponent } from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import StarRating from 'react-native-star-rating';

import { starFillColor } from '../../../config/colors';
import styles from './styles';

export default class Rating extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    onStarRatingChange: PropTypes.func,
    starCount: PropTypes.number,
    config: PropTypes.object,
    maxStars: PropTypes.number,
    error: PropTypes.bool,
  };

  static defaultProps = {
    label: '',
    onStarRatingChange: () => {},
    starCount: 0,
    config: {
      iconSet: 'MaterialIcons',
      emptyStar: 'star-border',
      fullStar: 'star',
      halfStar: 'star-half',
      starFillColor,
      enableHalfStar: false,
      ratingRemark: this.ratingRemark,
    },
    maxStars: 5,
    error: false,
  };

  constructor(props) {
    super(props);
    this.ratingRemark = {
      1: 'Very Bad',
      2: 'Bad',
      3: 'Average',
      4: 'Good',
      5: 'Excellent',
    };
  }

  onStarRatingPress = (starCount) => {
    const { onStarRatingChange } = this.props;
    onStarRatingChange(starCount);
  };

  getRatingRemark = () => {
    const { starCount, config } = this.props;
    const ratingRemark = config.ratingRemark || this.ratingRemark;
    return ratingRemark[starCount] || '';
  };

  render() {
    const {
      label,
      starCount,
      error,
      maxStars,
      config,
    } = this.props;
    const {
      iconSet,
      emptyStar,
      fullStar,
      halfStar,
      enableHalfStar,
    } = config;
    return (
      <View>
        {
          label
          ?
            <Text style={styles.label}>
              {this.props.label}
            </Text>
            :
            null
        }
        {
          error
          ?
            <Text style={styles.error}>
              Required
            </Text>
            :
            null
        }
        <View style={styles.ratingContainer}>
          <StarRating
            containerStyle={styles.containerStyle}
            halfStarEnabled={enableHalfStar}
            emptyStar={emptyStar}
            fullStar={fullStar}
            halfStar={halfStar}
            iconSet={iconSet}
            maxStars={maxStars}
            starSize={32}
            rating={starCount}
            selectedStar={this.onStarRatingPress}
            fullStarColor={config.starFillColor || starFillColor}
          />
          <Text style={styles.remark}>
            {this.getRatingRemark()}
          </Text>
        </View>
      </View>
    );
  }
}
