import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Header,
  CustomInput,
  InformationBlock,
  WeekDays,
  useSelectedWeekDays,
} from '../../components';
import {Strings} from '../../constants';
import styles from './PricingScreenStyles';

const PricingScreen = () => {
  const [regularPrice, setRegularPrice] = useState(0);
  const [peakPrice, setPeakPrice] = useState(0);
  const {selectedWeekDays} = useSelectedWeekDays();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />
        <View style={styles.contentContainer}>
          <CustomInput
            value={regularPrice}
            setValue={setRegularPrice}
            label={Strings.labels.regularPrice}
          />
          <InformationBlock infoText={Strings.regularPriceInfo} />
          <CustomInput
            value={peakPrice}
            setValue={setPeakPrice}
            label={Strings.labels.peakPrice}
            containerStyle={styles.label}
          />
          <InformationBlock infoText={Strings.peakPriceInfo} />
          <WeekDays />
        </View>
      </ScrollView>
    </View>
  );
};

export default PricingScreen;
