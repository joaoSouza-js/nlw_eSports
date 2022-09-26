import React, { useState } from 'react';
import {Feather} from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { View,Modal,TouchableOpacity, Text, ModalProps, Alert, ActivityIndicator} from 'react-native';

import { styles } from './styles';
import { THEME } from '../../../../theme';
import {CheckCircle} from 'phosphor-react-native'
import { Heading } from '../../../../components/Heading';

interface DicordModalProps extends ModalProps {
  hideModal: () => void,
  duoDiscord: string
}

export function DiscordModal({hideModal,duoDiscord,...rest}: DicordModalProps) {
  const [isCopping, setIsCopping] = useState(false)

  function handleHideModal(){
    hideModal()
  }

  async function handleCopyDuoDiscordToClipBoard(){
    setIsCopping(true)
    await Clipboard.setStringAsync(duoDiscord)
    Alert.alert("Discord Copiado",`você copio o discord de ${duoDiscord}`)
    setIsCopping(false)
  }

  return (
    <Modal transparent statusBarTranslucent {...rest} >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <TouchableOpacity 
            style={styles.exitButton}
            onPress={handleHideModal}
          >
            <Feather name='x' style={styles.exitButtonIcon}/>
          </TouchableOpacity>

          <CheckCircle 
            size={64}
            weight='bold'
            color={THEME.COLORS.SUCCESS} 
          />

          <Heading
            title='Let’s play!'
            subTitle='Agora é só começar a jogar!'
            style={{alignItems: 'center', marginTop:24}}
          />

          <View style={styles.footer} >
            <Text style={styles.title} > Adicione no Discord </Text>
            <TouchableOpacity 
              style={styles.discordButton}
              onPress={handleCopyDuoDiscordToClipBoard}
              disabled={isCopping}
            >
              <Text style={styles.discord}>
                 { isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : duoDiscord}
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}