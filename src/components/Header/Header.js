import React from 'react';
import {Image, View, Text} from 'react-native';
import {Strings} from '../../constants';
import {Icons} from '../../assets';
import styles from './HeaderStyles';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{Strings.pricing}</Text>
          <Image source={Icons.downChevron} style={styles.chevron} />
        </View>
        <Text style={styles.saveExit}>{Strings.saveExit}</Text>
      </View>
      <Text style={styles.headerSubtitle}>{Strings.headerSubtitle}</Text>
    </View>
  );
};

export default Header;
