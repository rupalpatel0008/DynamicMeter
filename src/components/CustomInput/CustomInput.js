import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {Metrics} from '../../theme';
import styles from './CustomInputStyles';

const CustomInput = ({label, value, setValue, containerStyle}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputBoxContainer}>
        {value > 0 && <Text style={styles.dollarSign}>$</Text>}
        <TextInput
          style={[
            styles.inputText,
            value === 0 && {paddingLeft: Metrics.baseMargin},
          ]}
          value={value}
          keyboardType="number-pad"
          maxLength={5}
          onChangeText={setValue}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

export default CustomInput;
