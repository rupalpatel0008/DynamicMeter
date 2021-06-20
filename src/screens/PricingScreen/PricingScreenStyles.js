import {StyleSheet} from 'react-native';
import {AppStyles, Colors, Metrics, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.mainContainer,
    backgroundColor: Colors.background,
    height: ScreenHeight,
  },
  contentContainer: {
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
  },
  label: {
    marginTop: Metrics.baseMargin,
  },
});

export default styles;
