import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import { Header } from '~/components/Header';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import {
  CART_SCREEN,
  CATEGORY_SCREEN,
  HOME_SCREEN,
  ITEM_SCREEN,
  LOGIN_SCREEN,
} from '~/constants/routes';
import { AddItem } from '~/screens/AddItem';
import { Cart } from '~/screens/Cart';
import { Category } from '~/screens/Category';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';
import Theme from '~/themes';

const Stack = createStackNavigator();
const StackLogin = createStackNavigator();

export function RootStack() {
  const { isLogged } = useSelector((state: AplicationState) => state.user);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0076ce' }}>
      <ThemeProvider theme={Theme.light}>
        <NavigationContainer>
          {isLogged ? (
            <Stack.Navigator initialRouteName={HOME_SCREEN}>
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

              <Stack.Screen
                name={CART_SCREEN}
                component={Cart}
                options={{
                  header: props => <Header {...props} enableNavigation />,
                }}
              />

              <Stack.Screen
                name={CATEGORY_SCREEN}
                component={Category}
                options={{
                  header: props => <Header {...props} enableNavigation />,
                }}
              />
            </Stack.Navigator>
          ) : (
            <StackLogin.Navigator initialRouteName={LOGIN_SCREEN}>
              <Stack.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{ headerShown: false }}
              />
            </StackLogin.Navigator>
          )}
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
