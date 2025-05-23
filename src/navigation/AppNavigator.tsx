import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from '../screens/Inicio';
import Transferencias from '../screens/Transferencias';
import Historico from '../screens/Historico';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Inicio">
        <Tab.Screen name="Inicio" component={Inicio} />
        <Tab.Screen name="Transferencias" component={Transferencias} />
        <Tab.Screen name="Historico" component={Historico} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
