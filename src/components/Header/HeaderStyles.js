import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: Metrics.baseMargin,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    zIndex: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...Fonts.style.h1,
    color: Colors.white,
  },
  chevron: {
    height: 15,
    width: 15,
    tintColor: Colors.white,
    marginLeft: Metrics.smallMargin,
  },
  saveExit: {
    color: Colors.yellow,
    lineHeight: 17,
    textDecorationLine: 'underline',
    fontFamily: Fonts.type.font300,
    fontSize: Fonts.size.medium,
    textAlign: 'right',
  },
  headerSubtitle: {
    ...Fonts.style.normal,
    marginTop: 15,
    color: Colors.white,
    letterSpacing: 0.5,
  },
});

export default styles;
