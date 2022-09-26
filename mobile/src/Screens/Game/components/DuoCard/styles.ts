import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
    container:{
        padding: 20,
        width: 195,
        borderRadius: 8,
        marginRight: 16,
        backgroundColor: THEME.COLORS.SHAPE
    },
    description:{
        marginBottom: 16,
    },
    title: {
        fontSize: THEME.FONT_SIZE.SM,
        color: THEME.COLORS.TEXT_DARK,
    },
    subTitle:{
        fontSize: THEME.FONT_SIZE.MD,
        color: THEME.COLORS.TEXT,
        fontWeight: 'bold'
    },
    availability:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    separete: {
        width: 5,
        height: 5,
        backgroundColor: THEME.COLORS.CAPTION_500,
        borderRadius: 2.5,
        marginHorizontal: 5
    },

    conenctButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
        paddingVertical: 8,
        borderRadius: 8,
        backgroundColor: THEME.COLORS.PRIMARY,
        
    },

    icon:{
        fontSize: 20,
        color: THEME.COLORS.TEXT,
    },

    conenctButtonTitle:{
        marginLeft: 8,
        color: THEME.COLORS.TEXT,

        fontSize: THEME.FONT_SIZE.SM,
        fontWeight: 'bold'
    }
})