
import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartData from '../Screen/CartData';
import Product from '../Screen/Product';

const Stack = createStackNavigator();

function AppStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Product">  
        <Stack.Screen
          name="Product"
          component={Product}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartData"
          component={CartData}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default AppStack;
