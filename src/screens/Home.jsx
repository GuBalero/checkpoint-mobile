import React from 'react'
import { Alert, Pressable, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Você está na tela de home</Text>
        <Pressable onPress={() => Alert.alert('Teste', 'Teste')}>
            <Text>Teste</Text>
        </Pressable>
    </View>
  )
}
