import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

const Listing = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/users?_quantity=10')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{flex: 1, padding: 15}}>
      {isLoading ? <Text>Loading...</Text> :
      ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
          <Text style={{
              fontSize: 24,
              color: 'blue',
              textAlign: 'center',
              paddingBottom: 10,
            }}>
            People List:
          </Text>
          <FlatList
            data={data.data}
            keyExtractor={({id}, index) => id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailsScreen', item)}>
                <Text style={{
                    fontSize: 20,
                    color: 'black',
                    paddingBottom: 10,
                  }}>
                  {item.id + '. ' + item.firstname + ' ' + item.lastname}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Listing;
