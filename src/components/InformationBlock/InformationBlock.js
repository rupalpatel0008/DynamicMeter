import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './InformationBlockStyles';
import {Icons} from '../../assets';

const InformationBlock = ({infoText, containerStyle}) => (
  <View style={[styles.container, containerStyle]}>
    <Image source={Icons.infoIcon} style={styles.infoIcon} />
    <Text style={styles.infoText}>{infoText}</Text>
  </View>
);

export default InformationBlock;
