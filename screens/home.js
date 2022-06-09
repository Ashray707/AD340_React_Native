import React from 'react';
import {View, Button, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home View</Text>
      <Button
        onPress={() => navigation.navigate('Listing')}
        title="Listing Screen">
        {' '}
      </Button>
    </View>
  );
};

export default Home;
