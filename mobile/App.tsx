import {useRef,useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Subscription } from 'expo-modules-core';
import * as Notifications from 'expo-notifications';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import { Router } from './src/routes';
import { Loading } from './src/components/Loading';
import { Background } from './src/components/Background';
import { GamesContextProvider } from './src/context/GamesContext';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';

import './src/services/notificationConfig'


export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })
  
  
  const getNotificationListener = useRef<Subscription>()
  const responseNotificationListener = useRef<Subscription>()

  useEffect(() => {
    getPushNotificationToken()
  },[])

  useEffect(() => {
    getNotificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log(notification)
    })

    responseNotificationListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response)
    })

    return () => {
      if(getNotificationListener.current && responseNotificationListener.current){
        Notifications.removeNotificationSubscription(getNotificationListener.current)
        Notifications.removeNotificationSubscription(getNotificationListener.current)

      }
    }
  }, [])
  return (
    <Background>
      <StatusBar 
        style='light' 
        backgroundColor='transparent' 
        translucent 
      />
      {
        fontLoaded 
        ? (
          <GamesContextProvider>
            <Router/>
          </GamesContextProvider>
        ) 
        : <Loading/>
      }
    </Background>
 
  );
}

