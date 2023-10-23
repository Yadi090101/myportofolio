import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Home from './src/components/Home';
import Profile from './src/components/Profile.';
import Contact from './src/components/Contact';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          />
        <Tab.Screen name="Settings" component={Profile} />
        <Tab.Screen name="Contact" component={Contact}  />
      </Tab.Navigator>
    </NavigationContainer>
  )
}