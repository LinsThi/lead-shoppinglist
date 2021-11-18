import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { Header } from '~/components/Header';

import { HOME_SCREEN, ITEM_SCREEN, LOGIN_SCREEN } from '~/constants/routes';
import { AddItem } from '~/screens/AddItem';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';
import Theme from '~/themes';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0076ce' }}>
      <ThemeProvider theme={Theme.light}>
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

            <Stack.Screen
              name={ITEM_SCREEN}
              component={AddItem}
              options={{
                header: props => <Header {...props} enableNavigation />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
