import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from '../stack/Navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, "Profile">;


const Profile = ({navigation}: PropsType) => {
  return (
    <View>
        <Text>Profile</Text>
    </View>
  )
}

export default Profile