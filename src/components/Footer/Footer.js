import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {Icons} from '../../assets';
import {Strings} from '../../constants';
import {Meter} from '../index';
import styles from './FooterStyles';

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.backButton}>
      <Image source={Icons.leftArrow} style={styles.leftIcon} />
    </TouchableOpacity>
  );
};

const NextButton = () => {
  return (
    <TouchableOpacity style={styles.nextButton}>
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
