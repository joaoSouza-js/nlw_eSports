import {StyleSheet} from 'react-native'
import { THEME } from '../../../../theme'

export const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: THEME.COLORS.OVERLAY,

    },
    
    container:{
        alignItems: 'center',

        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        width: 311,
        position: 'relative',
        paddingHorizontal: 40,
        paddingVertical: 32,
    },

    exitButton:{
        position: 'absolute',
        top:  16,
        right: 16,
    },

    exitButtonIcon:{
        fontSize: 20,
        color: THEME.COLORS.CAPTION_500,

    },

   
    
    footer:{
        width: '100%',
        marginTop: 24,
    },

    title:{
        textAlign: 'center',
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.MD,
        fontWeight: '600',
    },


    discordButton:{
        alignItems: 'center',
        justifyContent: 'center',
        
        width: '100%',
        height: 48,
        marginTop: 8,
        backgroundColor: THEME.COLORS.BACKGROUND_800,
        
        borderRadius: 4,
    },

    discord:{
        color: THEME.COLORS.CAPTION_300,
        fontSize: THEME.FONT_SIZE.MD,
    },


})