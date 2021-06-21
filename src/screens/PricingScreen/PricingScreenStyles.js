import {StyleSheet} from 'react-native';
import {AppStyles, Colors, Metrics, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.mainContainer,
    backgroundColor: Colors.background,
    height: ScreenHeight,
  },
  scrollView: {
    minHeight: ScreenHeight,
  },
  contentContainer: {
    paddingTop: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin,
  },
  label: {
    marginTop: Metrics.baseMargin,
  },
  longTermRentalContainer: {
    borderBottomWidth: 1,
  },
});

export default styles;
