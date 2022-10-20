import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
    FlatList,
    Button,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-vector-icons/AntDesign';
import { addMyProductsToCart } from '../NewRedux/MyCartSlice';
import { AuthContext } from '../Navigation/AuthProvider';
import { increaseQty } from '../NewRedux/MyProductSlice';

const MyProducts = () => {
    const navigation = useNavigation();

    const myProducts = useSelector(state => state.product);
    const myCartItems = useSelector(state => state.cart)
    console.log('added products', myProducts);

    const { user, logout } = useContext(AuthContext);

    const dispatch = useDispatch();

    const getTotal = () => {
        let total = 0;
        myCartItems.map(item => {
            total = total + item.qty * item.price
        });
        return total;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        width: '100%',
                        height: 70,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                    }}>
                    <Text style={{ fontSize: 20, marginLeft: 20, fontWeight: '600', color: 'black' }}>
                        Check these out!
                    </Text>
                    {/* <View style={{flexDirection:'row', backgroundColor:'red'}}> */}
                    <TouchableOpacity onPress={() => logout()}>
                    <Image
                        source={{
                            uri: 'https://www.kindpng.com/picc/m/19-194798_transparent-logout-png-sign-out-icon-transparent-png.png',
                        }}
                        style={{
                            width: '30%',
                            height: 30,
                            resizeMode: 'contain',
                            margin: 80,
                            // marginLeft:60
                        }}
                    />
                    </TouchableOpacity>

                    {/* <Icon name="logout" size={20} /> */}
                </View>
                <FlatList
                    data={myProducts}
                    renderItem={({ item, index }) => {
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
                                <View style={{ width: '60%', padding: 20 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>{item.name}</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontWeight: '600' }}>
                                            {'₹' + item.price}
                                        </Text>
                                        <Text style={{ fontSize: 12, fontWeight: '500', marginLeft: 10, color: 'red' }}>{item.time}</Text>
                                    </View>
                                    {item.qty == 0 ? (<TouchableOpacity
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
                                            dispatch(addMyProductsToCart(item));
                                            dispatch(increaseQty(item.id));
                                        }}>
                                        <Text style={{ color: '#fff', fontWeight: '600', fontSize: 14 }}>Add to Cart</Text>
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
                                                navigation.navigate('MyCart');
                                            }}
                                        >
                                            <Text style={{ color: '#fff', fontWeight: '600', fontSize: 14 }}>Go to Cart</Text>
                                        </TouchableOpacity>}
                                </View>
                                <Image
                                    source={{ uri: item.image }}
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
                {myCartItems.length>0?(
                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: 'white',
                        position: 'absolute',
                        bottom: 0,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-evenly'
                    }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 16, fontWeight: '700', color: 'black' }}
                            >{'added items' + '(' + myCartItems.length + ')'}</Text>
                            <Text>{'Total:' + getTotal()}</Text>
                        </View>
    
                        <TouchableOpacity style={{backgroundColor:'green', paddingHorizontal:20, paddingVertical:8}}
                        onPress={() => {
                            navigation.navigate('MyCart')
                        }}
                        >
                            <Text style={{fontSize:14, color:'white', fontWeight:'600'}}>View Cart</Text>
                        </TouchableOpacity>
    
                    </View>
                ):null}
                
                {/* <Button
                    title='LogOut'
                    color={'#F6C026'}
                    onPress={() => logout()}
                /> */}
            </View>
        </SafeAreaView>
    );
};

export default MyProducts;