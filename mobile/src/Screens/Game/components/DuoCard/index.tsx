import React from 'react';
import {Ionicons} from '@expo/vector-icons'
import { View,Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { adsProps } from '../..';
import { DuoInfo } from '../DuoInfo';
import { THEME } from '../../../../theme';

interface AdDescriptionProps {
    showModal: (id: string) => void,
    ad: adsProps
}

export function DuoCard({showModal,ad}: AdDescriptionProps) {
    const {hourEnd,hourStart,id,name,useVoiceChanneel,weekDays,yearsPlaying} = ad
    const {SUCCESS,ALERT} = THEME.COLORS

    const [hourEndFormated] = hourEnd.split(':')
    const [hoursStartFormated] = hourStart.split(':')

    function handleShowModal(){
        showModal(id)
    }

    return (
        <View style={styles.container}>
         
            <DuoInfo
                label='Nome'
                value={name}
            />

            <DuoInfo
                label='Tempo de Jogo'
                value={`${String(yearsPlaying)} ano(s)`}
            />


            <View style={styles.description}>
                <Text style={styles.title}>Disponibilidade</Text>
                
                <View style={styles.availability}>
                    <Text style={styles.subTitle}>{weekDays.length} dias</Text>
                    <View style={styles.separete}/> 
                    <Text style={styles.subTitle}> {hoursStartFormated}h-{hourEndFormated}h</Text>
                </View>
            </View>

            <DuoInfo
                label='Chamada de áudio?'
                value={useVoiceChanneel ? 'Sim' : 'Não'}
                colorValue={useVoiceChanneel ? SUCCESS : ALERT}
            />

            <TouchableOpacity 
                style={styles.conenctButton}
                onPress={handleShowModal}

            >
                <Ionicons  name='md-game-controller-outline' style={styles.icon}/>
                <Text style={styles.conenctButtonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>


        </View>
    );
}