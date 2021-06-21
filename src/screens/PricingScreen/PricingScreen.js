import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {
  Header,
  CustomInput,
  InformationBlock,
  WeekDays,
  useSelectedWeekDays,
  OptionBlock,
  LongTermRentalOptionBlock,
  Footer,
} from '../../components';
import {Strings} from '../../constants';
import styles from './PricingScreenStyles';
import {ScreenHeight} from '../../theme';

const PricingScreen = () => {
  const [regularPrice, setRegularPrice] = useState(0);
  const [peakPrice, setPeakPrice] = useState(0);
  const [longTermPrice, setLongTermPrice] = useState(0);
  const {selectedWeekDays} = useSelectedWeekDays();
  const [isPeakPriceOnHolidays, setIsPeakPriceOnHolidays] = useState(false);
  const [isLongTermRental, setIsLongTermRental] = useState(false);
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
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
          <OptionBlock
            value={isPeakPriceOnHolidays}
            toggleValue={setIsPeakPriceOnHolidays}
            label={Strings.peakPriceOnHolidays}
            infoText={Strings.autoApplyPeakPrice}
          />
          <LongTermRentalOptionBlock
            isLongTermRental={isLongTermRental}
            setIsLongTermRental={setIsLongTermRental}
            longTermPrice={longTermPrice}
            setLongTermPrice={setLongTermPrice}
          />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default PricingScreen;
