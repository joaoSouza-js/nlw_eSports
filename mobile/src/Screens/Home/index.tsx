import React, { useContext } from 'react';
import { View,Image,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';
import { GameCard } from './components/GameCard';
import { Heading } from '../../components/Heading';
import LogoImg from '../../assets/logo-nlw-esports.png'
import { Background } from '../../components/Background';
import { GamesContext } from '../../context/GamesContext';



export function Home() {
  const {games} = useContext(GamesContext)

  return (
    <Background>

      <SafeAreaView style={styles.container}>

        <View style={styles.headerContainer}>

          <View style={styles.logoContainer}>
            <Image source={LogoImg} style={styles.logo}/>
          </View>

          <Heading
            title='Encontre seu duo!'
            subTitle='Selecione o game que deseja jogar...'
          />
        </View>
        
        <FlatList
          data={games}
          keyExtractor = {item => item.id}
          renderItem = {({item}) => (
            <GameCard
              activeOpacity={.6}
              id={item.id}
              title={item.title}
              adAmount={item._count.Ads}
              cover={item.bannerUrl}
            />
            
          )}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}