import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.background,
    borderTopColor: Colors.borders,
    borderTopWidth: 0.5,
  },
  buttonsRow: {
    flexDirection: 'row',
    marginHorizontal: Metrics.baseMargin,
    marginTop: Metrics.smallMargin,
  },
  backButton: {
    borderColor: Colors.primary,
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 4,
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    height: 18,
    width: 18.47,
  },
  nextButton: {
    marginLeft: Metrics.smallMargin,
    backgroundColor: Colors.primary,
    width: 281,
    borderRadius: 4,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    fontFamily: Fonts.type.font700,
    color: Colors.white,
  },
});

export default styles;
