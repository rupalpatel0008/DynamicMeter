import React from 'react';
import {View, Text} from 'react-native';
import RNSpeedometer from 'react-native-speedometer';
import {Icons} from '../../assets';
import Strings from '../../constants/Strings';
import {Colors} from '../../theme';
import styles from './MeterStyles';

const findMeterValue = value => {
  if (value <= 1) {
    return Strings.demands.low;
  } else if (value > 1 && value <= 3) {
    return Strings.demands.average;
  } else if (value > 3) {
    return Strings.demands.good;
  }
};

const meterLabels = [
  {
    name: 'Low',
    labelColor: Colors.lowDemand,
    activeBarColor: Colors.lowDemand,
  },
  {
    name: 'Average',
    labelColor: Colors.averageDemand,
    activeBarColor: Colors.averageDemand,
  },
  {
    name: 'Good',
    labelColor: Colors.goodDemand,
    activeBarColor: Colors.goodDemand,
  },
];

const Meter = ({value}) => {
  const currentValue = findMeterValue(value);
  return (
    <View style={styles.container}>
      <RNSpeedometer
        labels={meterLabels}
        value={value - 1}
        size={81}
        minValue={0}
        maxValue={3}
        labelStyle={styles.labelStyle}
        labelNoteStyle={styles.labelStyle}
        halfCircleStyle={styles.halfCircleStyle}
        innerCircleStyle={styles.innerCircleStyle}
      />
      <Text style={styles.valueText}>
        {currentValue.value}
        <Text style={styles.infoText}>{currentValue.details}</Text>
      </Text>
    </View>
  );
};

export default Meter;
