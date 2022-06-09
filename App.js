import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/home';
import DetailsScreen from './screens/detail';
import ListingScreen from './screens/list';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{title: 'Home Page'}}
        />
        <Stack.Screen
          name="ListingScreen"
          component={ListingScreen}
          options={{title: 'List Page'}}
        />
        <Stack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{title: 'Detail Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
