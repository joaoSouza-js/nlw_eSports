import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
    container:{

    },

    containerWrapper:{
        marginTop: 32,
        paddingHorizontal: 24
    },
    adsListContainer:{
        marginTop: 16,
        paddingRight: 40,
        paddingLeft: 24
    },
    banner:{
        width: '100%',
        height: 160,
        borderRadius: 8,
        marginBottom: 24,
    },
    listEmptyMessage:{
        marginTop: 30,
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.CAPTION_300,
        fontWeight: 'bold'
    }
})