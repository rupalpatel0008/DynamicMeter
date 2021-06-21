import React from 'react';
import {Image, View, Text, TouchableOpacity, Keyboard} from 'react-native';
import {Icons} from '../../assets';
import {Strings} from '../../constants';
import {Meter} from '../index';
import styles from './FooterStyles';

const BackButton = () => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => Keyboard.dismiss()}>
      <Image source={Icons.leftArrow} style={styles.leftIcon} />
    </TouchableOpacity>
  );
};

const NextButton = () => {
  return (
    <TouchableOpacity
      style={styles.nextButton}
      onPress={() => Keyboard.dismiss()}>
      <Text style={styles.nextText}>{Strings.next}</Text>
    </TouchableOpacity>
  );
};

const Footer = ({meterValue}) => {
  return (
    <View style={styles.container}>
      <Meter value={meterValue} />
      <View style={styles.buttonsRow}>
        <BackButton />
        <NextButton />
      </View>
    </View>
  );
};

export default Footer;
