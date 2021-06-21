import React, {useState, useEffect} from 'react';
import {View, ScrollView, KeyboardAvoidingView} from 'react-native';
import {
  Header,
  CustomInput,
  InformationBlock,
  WeekDays,
  OptionBlock,
  LongTermRentalOptionBlock,
  Footer,
} from '../../components';
import {Strings} from '../../constants';
import styles from './PricingScreenStyles';

const useGetMeterValue = (
  regularPrice,
  peakPrice,
  isLongTermRental,
  isPeakPriceOnHolidays,
) => {
  const [meterValue, setMeterValue] = useState(0);
  useEffect(() => {
    if (regularPrice >= 55 && regularPrice <= 70) {
      setMeterValue(prev => prev + 1);
    }
  }, [regularPrice]);
  useEffect(() => {
    if (peakPrice >= 75 && peakPrice <= 90) {
      setMeterValue(prev => prev + 1);
    }
  }, [peakPrice]);
  useEffect(() => {
    if (isLongTermRental) {
      setMeterValue(prev => prev + 1);
    } else {
      setMeterValue(prev => (prev > 0 ? prev - 1 : prev));
    }
  }, [isLongTermRental]);
  useEffect(() => {
    if (isPeakPriceOnHolidays) {
      setMeterValue(prev => prev + 1);
    } else {
      setMeterValue(prev => (prev > 0 ? prev - 1 : prev));
    }
  }, [isPeakPriceOnHolidays]);
  return {meterValue};
};

const PricingScreen = () => {
  const [regularPrice, setRegularPrice] = useState(0);
  const [peakPrice, setPeakPrice] = useState(0);
  const [longTermPrice, setLongTermPrice] = useState(1200);
  const [isPeakPriceOnHolidays, setIsPeakPriceOnHolidays] = useState(false);
  const [isLongTermRental, setIsLongTermRental] = useState(false);
  const {meterValue} = useGetMeterValue(
    regularPrice,
    peakPrice,
    isLongTermRental,
    isPeakPriceOnHolidays,
  );
  console.log({meterValue});
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
      <Footer meterValue={meterValue} />
    </View>
  );
};

export default PricingScreen;
