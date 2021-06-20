import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    borderColor: Colors.bars,
  },
  firstRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: Metrics.baseMargin,
    marginHorizontal: Metrics.baseMargin,
  },
  switchTitle: {
    lineHeight: 19,
    fontFamily: Fonts.type.font500,
    fontWeight: 'bold',
    color: Colors.secondary,
    fontSize: 16,
  },
  infoText: {
    ...Fonts.style.normal,
    color: Colors.secondary,
    marginTop: -15,
    paddingBottom: 3,
    marginHorizontal: Metrics.baseMargin,
  },
});

export default styles;
