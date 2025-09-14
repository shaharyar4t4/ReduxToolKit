import MainLayout from '@/components/MainLayout';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import About from '../screen/About';
import Home from '../screen/Home';


//this is the root stack param list which tranfer the another data 
export type RootStackParamList = {
  Home: undefined;
  About: undefined;
  Profile: undefined;
 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <MainLayout>
      <Stack.Navigator initialRouteName={"Home"} screenOptions={{
        headerShown: false,
        
      }}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="About" component={About} />
       

        </Stack.Navigator>
    </MainLayout>
  )
}

export default Navigation