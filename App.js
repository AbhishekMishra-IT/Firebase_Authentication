import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './Redux/store/store';
import AppNavigator from './src/Navigation';
import DetailsData from './src/Screen/DetailsData';


const App = () => {
  
  return (
   <Provider store={store}>
    <AppNavigator/>
   </Provider>
  );
};

export default App;