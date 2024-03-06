import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './component/SplashScreen';
import Home from './component/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashSecScreen from './component/SplashSecScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen}  />
      <Stack.Screen name="SplashSec" component={SplashSecScreen}  />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default App

