import React from 'react';
import {TouchableOpacityProps,Text, TouchableOpacity, ImageBackground} from 'react-native';

import { styles } from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


interface GameCardProps extends TouchableOpacityProps {
  id: string,
  title: string,
  adAmount: number,
  cover: string
}

export function GameCard({adAmount,cover,title,id,...rest}:GameCardProps) {

  const {navigate} = useNavigation()
  function handleNavegateToGameScreen(){
    navigate('Game', {id:id})
  }

  return (
    <TouchableOpacity 
      style={styles.container} 
      {...rest}
      onPress={handleNavegateToGameScreen}
    >
      <ImageBackground style={styles.cover} resizeMode='cover' source={{uri:cover}}>
        <LinearGradient
          style={styles.footer}
          colors={['rgba(0, 0, 0,0.0)', 'rgba(0, 0, 0, 0.9)']}
        >
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.adAmount}>
            {adAmount} anúncios
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}