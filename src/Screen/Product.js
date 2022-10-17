import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    Button,
  } from 'react-native';
  import React, {useContext, useState} from 'react';
  import {useNavigation} from '@react-navigation/native';
  import {useDispatch, useSelector} from 'react-redux';
import { addDetailsAction } from '../../Redux/action/detailAction';
import { AuthContext } from '../Navigation/AuthProvider';
import { Icon } from 'react-native-vector-icons/AntDesign';
  
  const data = [
    {
      id:1,
      name: 'Chocolate Cake',
      price: '₹575',
      image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80',
      time: '40 min',
      qty: '1'
    },
    {
      id:2,
      name: 'Mix Healthy',
      price: '₹600',
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
        time: '40 min',
        qty: '0'
    },
    {
      id:3,
      name: 'Salad',
      price: '₹520',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
      time: '35 min',
      qty: '0'
    },
    {
      id:4,
      name: 'Pizza Mania',
      price: '₹300',
      image: 'https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
      time: '45 min',
      qty: '0'
    },
    {
      id:5,
      name: 'Choco Coffee',
      price: '₹150',
      image:
        'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
        time: '20 min',
        qty: '0'
    },
    {
      id:6,
      name: 'Paneer Sandwich',
      price: '₹225',
      image:
        'https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        time: '50 min',
        qty: '0'
    },
    {
      id:7,
      name: 'Donut',
      price: '₹120',
      image:
        'https://images.unsplash.com/photo-1551024601-bec78aea704b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60',
        time: '40 min',
        qty: '0'
    },
  ];
  const Product = () => {
    const navigation = useNavigation();
  
    const dispatch = useDispatch();
  
    const addItem = item => {
      dispatch(addDetailsAction(item));
    };
  
    const items = useSelector(state => state);
    let addedItems = [];
    addedItems = items;

    const {user, logout} = useContext(AuthContext);
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              height: 70,
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{fontSize: 20, marginLeft: 20, fontWeight: '600', color:'black'}}>
              Check these out!
            </Text>
            <TouchableOpacity
              style={{
                borderRadius: 20,
                backgroundColor: 'black',
                paddingHorizontal:20,
                marginRight: 20,
              }}
              onPress={() => {
                navigation.navigate('CartData')
              }}>
              <Text style={{ fontSize: 20, fontWeight: '800', color:'white'}}>
                {addedItems.length}
                
              </Text>
            </TouchableOpacity>
            
            {/* <Icon name="logout" size={20} /> */}
          </View>
          <FlatList
            data={data}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    borderRadius: 15,
                    alignSelf: 'center',
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  <View style={{width: '60%', padding: 20}}>
                    <Text  style={{fontSize: 18, fontWeight: '500', color:'black'}}>{item.name}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600'}}>
                      {item.price}
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: '500', marginLeft:10, color:'red'}}>{item.time}</Text>
                    </View>
                    {item.qty ==0 ? (<TouchableOpacity
                      style={{
                        height: 30,
                        borderRadius: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        addItem(item);
                      }}>
                      <Text style={{color: '#fff', fontWeight:'600', fontSize:14}}>Add to Cart</Text>
                    </TouchableOpacity>)
                    

                   : <TouchableOpacity
                      style={{
                        height: 30,
                        borderRadius: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        navigation.navigate('CartData')
                      }}
                      >
                      <Text style={{color: '#fff', fontWeight:'600', fontSize:14}}>Go to Cart</Text>
                    </TouchableOpacity>}
                  </View>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      width: 100,
                      height: 90,
                      borderRadius: 10,
                      marginRight: 15,
                    }}
                  />
                </View>
              );
            }}
          />
          <Button
          title='LogOut'
          onPress={() => logout()}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Product;