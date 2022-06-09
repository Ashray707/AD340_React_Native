import {useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  item: {
    padding: 10,
    fontSize: 19,
    height: 44,
    color: 'black',
  },
});

export default function Details() {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.item}>
        Full Name: {route.params.firstname + ' ' + route.params.lastname}
      </Text>
      <Text style={styles.item}>User Name: {route.params.username}</Text>
      <Text style={styles.item}>Email: {route.params.email}</Text>
      <Text style={styles.item}>Website: {route.params.website}</Text>
      <Text style={styles.item}>Image Url: {route.params.image}</Text>
    </View>
  );
}
