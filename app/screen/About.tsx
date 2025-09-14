import { setValue } from '@/store/slices/PassVariable';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../stack/Navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, "About">;


const About = ({ navigation }: PropsType) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  return (

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Push on Profile Page"
        onPress={() => {
          dispatch(setValue(text));
          navigation.navigate('Profile');
        }}
      />
      
    </View>

  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 20 },
});

export default About