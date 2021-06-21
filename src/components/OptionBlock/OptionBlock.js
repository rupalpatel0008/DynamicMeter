import React from 'react';
import {View, Text} from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';
import {Colors} from '../../theme';
import styles from './OptionBlockStyles';

const OptionBlock = ({value, toggleValue, label, infoText, containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.firstRow}>
        <Text style={styles.switchTitle}>{label}</Text>
        <ToggleSwitch
          isOn={value}
          onColor={Colors.primary}
          offColor={Colors.borders}
          thumbColor={Colors.white}
          onToggle={toggleValue}
          animationSpeed={100}
        />
      </View>
      <Text style={styles.infoText}>{infoText}</Text>
    </View>
  );
};

export default OptionBlock;
