import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import OnboardingScreen from './src/screens/OnboardingScreen';
import SignupScreen from './src/screens/authentication/SignupScreen';
import LoginScreen from './src/screens/authentication/LoginScreen';
import BottomTabScreen from './src/screens/BottomTabScreen';

const Stack = createStackNavigator();

const App = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        {showSplashScreen ? (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        ) : null}
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="signUp" component={SignupScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="bottom-tab" component={BottomTabScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
