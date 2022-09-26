import { StyleSheet } from "react-native";
import { THEME } from "../../../../theme";

export const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal: 24,
    },
    
    backButton:{
        fontSize: 32,
        color: THEME.COLORS.CAPTION_300,
    },
    logoWrapper:{
        flex: 1,
        alignItems: 'center',
    },
    logo:{
        marginLeft: -32,
        height: 40,
        width: 72
    }
})