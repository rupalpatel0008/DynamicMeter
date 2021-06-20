import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  label: {
    ...Fonts.style.label,
    color: Colors.secondary,
    marginHorizontal: Metrics.baseMargin,
  },
  inputBoxContainer: {
    marginHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.white,
    height: Metrics.inputHeight,
    borderColor: Colors.borders,
    marginTop: 4,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dollarSign: {
    paddingLeft: Metrics.baseMargin,
    ...Fonts.style.input,
    color: Colors.secondary,
  },
  inputBox: {
    alignItems: 'center',
  },
  inputText: {
    ...Fonts.style.input,
    color: Colors.secondary,
    marginBottom: -3,
    marginLeft: -1,
  },
});

export default styles;
