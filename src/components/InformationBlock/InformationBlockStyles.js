import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.smallMargin,
    backgroundColor: Colors.white,
    borderColor: Colors.borders,
    flexDirection: 'row',
  },
  infoText: {
    ...Fonts.style.normal,
    color: Colors.secondary,
    marginLeft: 5,
    lineHeight: 16,
  },
  infoIcon: {
    height: 14,
    width: 14,
    marginTop: 5,
  },
});

export default styles;
