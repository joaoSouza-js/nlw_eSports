import {  useRoute } from '@react-navigation/native';
import { Image, View,FlatList,Text } from 'react-native';
import React,{useState,useContext, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import { styles } from './styles';
import { api } from '../../../libs/axios';
import { Header } from './components/Header';
import { DuoCard } from './components/DuoCard';
import { Heading } from '../../components/Heading';
import { GameParms } from '../../@types/navgation';
import { DiscordModal } from './components/DiscordModal';
import { Background } from '../../components/Background';
import { GamesContext } from '../../context/GamesContext';

export interface adsProps {
  hourEnd: string,
  hourStart: string,
  id: string,
  name: string,
  useVoiceChanneel: boolean,
  weekDays: string[],
  yearsPlaying: number,
}

export function Game() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [duoDiscord, setDuoDiscord] = useState('')
  const [ads, setAds]  = useState<adsProps[]>([])
  const {games} = useContext(GamesContext)

  const route = useRoute()
  const {id} = route.params as GameParms
  const gameSelected = games.find(game => game.id === id)

  async function loadAds(){
    const response = await api.get(`games/${gameSelected?.id}/ads`)
    setAds(response.data)
  }

  useEffect(() => {
    loadAds()
  } , [])


  async function getDiscord(id: string){
    const response = await api.get(`ads/${id}/discord`)
    setDuoDiscord(response.data.discord)
  }

  function showModal(id: string){
    setModalIsVisible(true)
    getDiscord(id)
  }
  
  function hideModal(){
    setModalIsVisible(false)
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
          <Header/>

          <View style={styles.containerWrapper}>
            <Image 
              style={styles.banner} 
              source={{uri:gameSelected?.bannerUrl}}
              resizeMode='contain'
            />
            <Heading
              title={gameSelected?.title!}
              subTitle='Conecte-se e comece a jogar!'
            />
          </View>
          
          <FlatList 
            data={ads}
            keyExtractor={item  => item.id}
            renderItem = { ({item}) => (
              <DuoCard
                ad={item}
                showModal = {showModal}
              />
            )}
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyMessage}>Não há nenhum Anúcio criado</Text>
            )}
            contentContainerStyle = {styles.adsListContainer}
            horizontal
            
          />

          <DiscordModal
            animationType='fade'
            visible={modalIsVisible}
            hideModal={hideModal}
            duoDiscord = {duoDiscord}
          />
      </SafeAreaView>
    </Background>
  );
}