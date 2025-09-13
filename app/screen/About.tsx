import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../stack/Navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, "About">;


const About = ({navigation}: PropsType) => {
  return (
    <View>
        <Text>About</Text>
    </View>
  )
}

export default About