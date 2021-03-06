import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../../theme';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: Colors.bars,
    paddingBottom: Metrics.baseMargin,
  },
  inputContainer: {
    opacity: 0.5,
  },
});

export default styles;
