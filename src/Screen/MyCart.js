import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
  } from 'react-native';
  import React from 'react';
  import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addMyProductsToCart, deleteMyCartItem, removeMyCartItem } from '../NewRedux/MyCartSlice';
  
  const MyCart = () => {
    const navigation = useNavigation();

    const myCartItems = useSelector(state=> state.cart) 
    console.log("Added Item in Cart", myCartItems);
    const dispatch = useDispatch();

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
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                justifyContent: 'center',
                alignItems: 'center',
                // marginLeft: 15,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{fontWeight: '700', fontSize: 20}}>Back</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={myCartItems}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    height: 100,
                    borderRadius: 15,
                    alignSelf: 'center',
                    marginTop: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  <View style={{width: '60%', padding: 20}}>
                    <Text style={{fontSize: 18, fontWeight: '600', color:'black'}}>{item.name}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize: 15, fontWeight: '600'}}>
                      {item.price}
                    </Text>
                    <Text style={{fontSize: 12, fontWeight: '500', marginLeft:10, color:'red'}}>{item.time}</Text>
                    </View>

                    <View style={{flexDirection:'row', marginTop:10}}>
                    {item.qty == 0 ? null : (
                      <TouchableOpacity style={{
                        backgroundColor:'green',
                        borderRadius: 7,
                        height:27,
                        justifyContent:'center',
                        alignItems:'center',
                        paddingLeft:10,
                        paddingRight:10,
                        marginLeft:10
                        }}
                        onPress={() => {
                          if (item.qty > 1){
                            dispatch(removeMyCartItem(item));
                          }else {
                            dispatch(deleteMyCartItem(item.id));
                          }
                          
                        }}
                        >
                          <Text style={{color:'white'}}>-</Text>

                      </TouchableOpacity>
                    )}
                      {item.qty == 0 ? null : (
                      <Text style={{marginLeft:10, fontSize:16, color:'black'}}>
                        {item.qty}
                        </Text>
                      )}
                      {item.qty == 0 ? null : (
                      <TouchableOpacity style={{
                        backgroundColor:'green',
                        borderRadius: 7,
                        height:27,
                        justifyContent:'center',
                        alignItems:'center',
                        paddingLeft:10,
                        paddingRight:10,
                        marginLeft:10
                        }}
                        onPress={() => {
                          dispatch(addMyProductsToCart(item));
                        }}
                        >
                          <Text style={{color:'white'}}>+</Text>

                      </TouchableOpacity>
                      )}
                    </View>
                    {/* <TouchableOpacity
                      style={{
                        height: 30,
                        borderRadius: 10,
                        width: 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#FFCCCB',
                        marginTop: 5,
                      }}
                      onPress={() => {
                        dispatch(deleteMyCartItem(item));
                      }}>
                      <Text style={{color: '#fff', fontSize:14, fontWeight:'600'}}>Remove</Text>
                    </TouchableOpacity> */}
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
        </View>
      </SafeAreaView>
    );
  };
  
  export default MyCart;