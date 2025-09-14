import Cart from '@/components/Cart';
import { increment } from '@/store/slices/counterSlice';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../stack/Navigation';

type PropsType = NativeStackScreenProps<RootStackParamList, "Home">;


const Home = ({navigation}: PropsType) => {

  // dispatch is help to call the action
  const dispatch = useDispatch()
  return (
    
    <View>
      <Cart/>
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title="Add Number" onPress={() => dispatch(increment())}/>
        <Button title="Go to About" onPress={() => navigation.navigate('About')}/>

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignContent:'center',
      paddingVertical:20,
      paddingHorizontal: 20,
    }
});