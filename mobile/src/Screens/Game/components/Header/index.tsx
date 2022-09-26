import React from 'react';
import {Feather} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';
import LogoImg from '../../../../assets/logo-nlw-esports.png'

export function Header() {
  const Navegate = useNavigation()

  function handleGoBack(){
    Navegate.goBack()
  }
  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={handleGoBack}>
            <Feather  style={styles.backButton} name='chevron-left'/>
        </TouchableOpacity>

        <View style={styles.logoWrapper}>
            <Image source={LogoImg} style={styles.logo}/>
        </View>
    </View>
  );
}