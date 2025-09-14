import { RootState } from '@/store/Store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStackParamList } from '../stack/Navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const Profile = ({}: PropsType) => {
  const value = useSelector((state: RootState) => state.passVariable.value);
  console.log('-> value in profile ', value);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default Profile;
