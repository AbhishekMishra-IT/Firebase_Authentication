
import 'react-native-gesture-handler';
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CartData from '../Screen/CartData';
import Product from '../Screen/Product';
import MyProducts from '../Screen/MyProducts'
import MyCart from '../Screen/MyCart';

const Stack = createStackNavigator();

function AppStack() {
  return (
    // <NavigationContainer>
      <Stack.Navigator initialRouteName="MyProducts">  
        <Stack.Screen
          name="MyProducts"
          component={MyProducts}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
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
