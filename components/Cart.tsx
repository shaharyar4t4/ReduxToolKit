import { RootState } from '@/store/Store'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'

const Cart = () => {
  // useSelector is help to get the state from the store
  const count = useSelector((state: RootState) => state.counterSlice.value);
  console.log("-> count ",count);
  return (

    <View style={styles.container}>
        <Text>Cart</Text>
        <Button title={`Cart ${count}`}/>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
      justifyContent:'space-between',
      paddingVertical:20,
      paddingHorizontal: 20,
    }
});