import React from 'react';
import {View, ScrollView} from 'react-native';
import {Header} from '../../components';
import styles from './PricingScreenStyles';

const PricingScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
      </ScrollView>
    </View>
  );
};

export default PricingScreen;
