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
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Page'}}
        />
        <Stack.Screen name="Detail" component={DetailsScreen} />
        <Stack.Screen name="Listing" component={ListingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
