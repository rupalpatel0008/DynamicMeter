import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// Used via Metrics.baseMargin
const Metrics = {
  zero: 0,
  baseMargin: 20,
  smallMargin: 10,
  inputHeight: 40,
  buttonHeight: 44,
};
export {Metrics, width, height};
