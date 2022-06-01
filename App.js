import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  item: {
    padding: 10,
    fontSize: 19,
    height: 44,
  },
  header: {
    fontSize: 23,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 19,
    padding: 12,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> React Native Mobile App </Text>
      <Text style={styles.description}>
        First React Native App with Lists of Anime Names, Movies and TV Shows !!
      </Text>
      <FlatList
        data={[
          {key: 'Naruto'},
          {key: 'One Piece'},
          {key: 'Portgas D. Ace'},
          {key: 'Itachi'},
          {key: 'Shanks'},
          {key: 'Luffy'},
          {key: 'Zoro'},
          {key: 'Pain'},
          {key: 'Sasori'},
          {key: 'Hidan'},
          {key: 'Jiraya'},
          {key: 'Orochimaru'},
          {key: 'Usoop'},
          {key: 'Gold D. Roger'},
          {key: 'WhiteBeard'},
          {key: 'The Invisible Guest'},
          {key: 'Breaking Bad'},
          {key: 'Narcos'},
          {key: 'Pablo'},
          {key: 'Sanji'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
