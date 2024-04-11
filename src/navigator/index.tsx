import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Category, Home, Product} from '../screens';

export type Screens = {
  Home: undefined;
  Product: {
    item: any;
  };
  Category: {
    id: number;
    title: string;
  };
};

const Stack = createStackNavigator<Screens>();

function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}

export default Navigator;
