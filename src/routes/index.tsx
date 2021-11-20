import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext, ThemeProvider } from 'styled-components/native';

import { Header } from '~/components/Header';

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

export function RootStack() {
  const { Colors } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BLUE }}>
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
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}
