import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics, ScreenWidth} from '../../theme';

const styles = StyleSheet.create({
  container: {
    maxWidth: ScreenWidth,
    flexDirection: 'row',
    backgroundColor: Colors.background,
    paddingHorizontal: Metrics.baseMargin,
    paddingVertical: Metrics.smallMargin,
    alignItems: 'center',
  },
  valueText: {
    ...Fonts.style.normal,
    maxWidth: ScreenWidth - 130,
    flexDirection: 'row',
    fontFamily: Fonts.type.font700,
    color: Colors.secondary,
    fontWeight: 'bold',
    marginLeft: Metrics.smallMargin,
  },
  infoText: {
    ...Fonts.style.normal,
    fontWeight: 'normal',
    color: Colors.secondary,
  },
  labelStyle: {
    display: 'none',
  },
  halfCircleStyle: {
    borderRadius: 20,
  },
  innerCircleStyle: {
    width: 61,
    height: 30.5,
  },
});

export default styles;
