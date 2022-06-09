import React from 'react';
import {View, Button, Text} from 'react-native';

const Listing = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Listing View</Text>
      <Button
        onPress={() => navigation.navigate('Detail')}
        title="Detail Screen">
        {' '}
      </Button>
    </View>
  );
};

export default Listing;
