import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    firstName: 'Abhishek',
    lastName: 'Mishra',
    email: 'abhishek@ipangram.com',
    mobile: '9999334788'

  },
  {
    id: '2',
    firstName: 'Krunal',
    lastName: 'Patel',
    email: 'krunal@ipangram.com',
    mobile: '7896384523'
  },
  {
    id: '3',
    firstName: 'Ujjawal',
    lastName: 'Srivastava',
    email: 'ujjawal@gmail.com',
    mobile: '9873164537'
  },
];

const Item = ({ firstName, lastName, email, mobile }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{firstName}</Text>
    <Text style={styles.title}>{lastName}</Text>
    <Text style={styles.title}>{email}</Text>
    <Text style={styles.title}>{mobile}</Text>
  </View>
);

const DetailsData = () => {
  const renderItem = ({ item }) => (
    <Item 
    firstName={item.firstName}
    lastName={item.lastName}
    email={item.email}
    mobile={item.mobile}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#DCDCDC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
});

export default DetailsData;