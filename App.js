import React, { useReducer } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Home from './components/Home';
import login from './components/login';
import FoodItemRecipe from './components/FoodItemRecipe';

import Feedback from './components/Feedback';
import Favourites from './components/Favourites';

import logout from './components/logout';

export const AppContext = React.createContext();
import { reducer, initialState } from './Store';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Log In"
            screenOptions={{ headerShown: true }}>
            <Drawer.Screen name="Log In" component={login} />
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Food Item Recipe" component={FoodItemRecipe} />
            <Drawer.Screen name="Feedback" component={Feedback} />
            <Drawer.Screen name="Favourites" component={Favourites} />
            <Drawer.Screen name="Log out" component={logout} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
