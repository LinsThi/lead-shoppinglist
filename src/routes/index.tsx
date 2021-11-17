import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '~/components/Header';

import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants/routes';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4299E1' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
          <Stack.Screen
            name={LOGIN_SCREEN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={HOME_SCREEN}
            component={Home}
            options={{ header: props => <Header {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
