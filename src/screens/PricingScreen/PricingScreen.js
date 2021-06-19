import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import styles from './PricingScreenStyles';

const PricingScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Pricing screen</Text>
      </ScrollView>
    </View>
  );
};

export default PricingScreen;
