import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';


export const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    color: THEME.COLORS.TEXT,
    lineHeight: 38,
  },
  
  subTitle: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.CAPTION_400,
    lineHeight: 25.6
  },
});