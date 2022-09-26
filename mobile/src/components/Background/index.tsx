import React, { ReactNode } from 'react';
import { ImageBackground } from 'react-native';

import BackgroundImg from '../../assets/background-galaxy.png'
import { styles } from './styles';

interface BackgrondProps {
    children: ReactNode
}

export function Background({children}: BackgrondProps) {
  return (
    <ImageBackground 
      source={BackgroundImg} 
      style={styles.container}
      defaultSource={BackgroundImg}
    >
        {children}
    </ImageBackground>
  );
}