import { StyleSheet } from 'react-native';
import { THEME } from '../../../../theme';

export const styles = StyleSheet.create({
  container: {
    marginRight: 24,
  },
  cover:{
    justifyContent: 'flex-end',
    overflow: 'hidden',
    borderRadius: 8,
    height: 320,
    width: 240.24,
  },
  footer:{
    padding: 16,
  },
  title: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.TEXT,
    lineHeight: 25.6,
  },

  
  adAmount: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_300,
    lineHeight: 22.4
  },
});