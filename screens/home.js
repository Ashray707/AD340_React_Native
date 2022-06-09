import React from 'react';
import {View, Button, Text} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text
        style={{
        fontSize: 24,
        color: 'blue',
        textAlign: 'center',
          paddingBottom: 10,
      }}>
      Home View
    </Text>
      <Button
        onPress={() => navigation.navigate('ListingScreen')}
        title="People List Screen">
        {' '}
      </Button>
    </View>
  );
};

export default Home;
