import { StyleSheet } from 'react-native';
import { THEME } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: THEME.FONT_SIZE.SM,
    color: THEME.COLORS.TEXT_DARK,
  },
  value: {
    fontSize: THEME.FONT_SIZE.MD,
    color: THEME.COLORS.TEXT,
    fontWeight: 'bold'
  }
});