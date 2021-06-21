import React from 'react';
import {View} from 'react-native';
import {Strings} from '../../constants';
import {CustomInput, OptionBlock} from '../index';
import styles from './LongTermRentalOptionBlockStyles';

const LongTermRentalOptionBlock = ({
  isLongTermRental,
  setIsLongTermRental,
  longTermPrice,
  setLongTermPrice,
}) => {
  return (
    <View style={styles.container}>
      <OptionBlock
        value={isLongTermRental}
        toggleValue={setIsLongTermRental}
        label={Strings.longTermRental}
        infoText={Strings.longTermInfo}
        containerStyle={styles.longTermRentalContainer}
      />
      <CustomInput
        value={'1200'}
        defaultValue={'1200'}
        isDisabled={true}
        label={Strings.labels.longTerRentalLabel}
        containerStyle={styles.inputContainer}
      />
    </View>
  );
};

export default LongTermRentalOptionBlock;
