import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, ScreenWidth} from '../../theme';

const itemWidth = 42;
const paddingInBetween =
  (ScreenWidth - itemWidth * 7 - Metrics.baseMargin * 2) / 6;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginBottom: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  label: {
    ...Fonts.style.label,
    color: Colors.secondary,
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
  },
  separator: {
    width: paddingInBetween,
  },
  day: {
    justifyContent: 'center',
    backgroundColor: Colors.overlay,
    height: itemWidth,
    width: itemWidth,
    borderRadius: itemWidth / 2,
  },
  selectedDay: {
    backgroundColor: Colors.primary,
  },
  dayText: {
    color: Colors.secondary,
    fontFamily: Fonts.type.font500,
    textAlign: 'center',
  },
  selectedDayText: {
    color: Colors.white,
  },
});

export default styles;
