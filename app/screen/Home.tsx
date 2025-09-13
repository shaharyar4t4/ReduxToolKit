import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../stack/Navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, "Home">;


const Home = ({navigation}: PropsType) => {
  return (
    <View>
        <Text>Home</Text>
    </View>
  )
}

export default Home