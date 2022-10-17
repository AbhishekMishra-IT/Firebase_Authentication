import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext, AuthProvider } from './AuthProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useDispatch } from 'react-redux';
import { addMyProducts } from '../NewRedux/MyProductSlice';


const Routes = () => {

    let items = [
  {
      id: 1,
      name: 'Chocolate Cake',
      price: '₹575',
      image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      time: '40 min',
      qty: '0'
  },
  {
      id: 2,
      name: 'Mix Healthy',
      price: '₹600',
      image:
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      time: '40 min',
      qty: '0'
  },
  {
      id: 3,
      name: 'Salad',
      price: '₹520',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      time: '35 min',
      qty: '0'
  },
  {
      id: 4,
      name: 'Pizza Mania',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      time: '45 min',
      qty: '0'
  },
  {
      id: 5,
      name: 'Choco Coffee',
      price: '₹150',
      image:
          'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      time: '20 min',
      qty: '0'
  },
  {
      id: 6,
      name: 'Paneer Sandwich',
      price: '₹225',
      image:
          'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      time: '50 min',
      qty: '0'
  },
  {
      id: 7,
      name: 'Donut',
      price: '₹120',
      image:
          'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
      time: '40 min',
      qty: '0'
  },
];

    const { user, setUser } = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
      }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;

    }, []);

    const dispatch = useDispatch();

  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    })

  }, []);
    if (initializing) return null;
    return (
        <NavigationContainer>
            { user ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    );

};

export default Routes;