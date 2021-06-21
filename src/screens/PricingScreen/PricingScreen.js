import React, {useState, useEffect, useRef} from 'react';
import {View, ScrollView} from 'react-native';
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

function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

const useGetMeterValue = (
  regularPrice,
  peakPrice,
  isLongTermRental,
  isPeakPriceOnHolidays,
) => {
  const [meterValue, setMeterValue] = useState(0);
  const [criteria1, setCriteria1] = useState(0);
  const [criteria2, setCriteria2] = useState(0);
  const [criteria3, setCriteria3] = useState(0);
  const [criteria4, setCriteria4] = useState(0);
  const oldRegularPrice = usePrevious(regularPrice);
  const oldPeakPrice = usePrevious(peakPrice);
  useEffect(() => {
    if (regularPrice >= 55 && regularPrice <= 70) {
      setCriteria1(1);
    } else if (oldRegularPrice >= 55 && regularPrice < 55) {
      setCriteria1(0);
    }
  }, [oldRegularPrice, regularPrice]);
  useEffect(() => {
    if (peakPrice >= 75 && peakPrice <= 90) {
      setCriteria2(1);
    } else if (oldPeakPrice >= 75 && peakPrice < 75) {
      setCriteria2(0);
    }
  }, [oldPeakPrice, peakPrice]);
  useEffect(() => {
    if (isLongTermRental) {
      setCriteria3(1);
    } else {
      setCriteria3(0);
    }
  }, [isLongTermRental]);
  useEffect(() => {
    if (isPeakPriceOnHolidays) {
      setCriteria4(1);
    } else {
      setCriteria4(0);
    }
  }, [isPeakPriceOnHolidays]);

  useEffect(() => {
    setMeterValue(criteria1 + criteria2 + criteria3 + criteria4);
  }, [criteria1, criteria2, criteria3, criteria4]);
  return {meterValue};
};

const PricingScreen = () => {
  const [regularPrice, setRegularPrice] = useState('');
  const [peakPrice, setPeakPrice] = useState('');
  const [longTermPrice, setLongTermPrice] = useState(1200);
  const [isPeakPriceOnHolidays, setIsPeakPriceOnHolidays] = useState(false);
  const [isLongTermRental, setIsLongTermRental] = useState(false);
  const {meterValue} = useGetMeterValue(
    regularPrice,
    peakPrice,
    isLongTermRental,
    isPeakPriceOnHolidays,
  );
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentContainer}>
          <CustomInput
            value={regularPrice}
            setValue={setRegularPrice}
            label={Strings.labels.regularPrice}
            maxLength={2}
          />
          <InformationBlock infoText={Strings.regularPriceInfo} />
          <CustomInput
            value={peakPrice}
            setValue={setPeakPrice}
            label={Strings.labels.peakPrice}
            containerStyle={styles.label}
            maxLength={2}
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
