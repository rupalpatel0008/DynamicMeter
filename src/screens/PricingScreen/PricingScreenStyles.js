import {StyleSheet} from 'react-native';
import {AppStyles, Colors, ScreenHeight} from '../../theme';

const styles = StyleSheet.create({
  container: {
    ...AppStyles.mainContainer,
    backgroundColor: Colors.background,
    height: ScreenHeight,
  },
});

export default styles;
