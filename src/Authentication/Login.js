import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, createRef, useContext} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { AuthContext } from '../Navigation/AuthProvider';


const Login = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
 
  const passwordInputRef = createRef();

  const {login} = useContext(AuthContext);
 
//   const handleSubmitPress = () => {
//     setErrortext('');
//     if (!userEmail) {
//       alert('Please fill Email');
//       return;
//     }
//     if (!userPassword) {
//       alert('Please fill Password');
//       return;
//     }
//     // setLoading(true);
//     let dataToSend = {email: userEmail, password: userPassword};
//     let formBody = [];
//     for (let key in dataToSend) {
//       let encodedKey = encodeURIComponent(key);
//       let encodedValue = encodeURIComponent(dataToSend[key]);
//       formBody.push(encodedKey + '=' + encodedValue);
//     }
//     formBody = formBody.join('&');
 
//     fetch('http://localhost:3000/api/user/login', {
//       method: 'POST',
//       body: formBody,
//       headers: {
//         //Header Defination
//         'Content-Type':
//         'application/x-www-form-urlencoded;charset=UTF-8',
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         //Hide Loader
//         // setLoading(false);
//         console.log(responseJson);
//         // If server response message same as Data Matched
//         if (responseJson.status === 'success') {
//           AsyncStorage.setItem('user_id', responseJson.data.email);
//           console.log(responseJson.data.email);
//           navigation.replace('DrawerNavigationRoutes');
//         } else {
//           setErrortext(responseJson.msg);
//           console.log('Please check your email id or password');
//         }
//       })
//       .catch((error) => {
//         //Hide Loader
//         // setLoading(false);
//         console.error(error);
//       });
//   };
 
  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={{alignItems: 'center'}}>
              <Image
                source={{
                  uri: 'https://seeklogo.com/images/F/firebase-logo-402F407EE0-seeklogo.com.png',
                }}
                style={{
                  width: '60%',
                  height: 100,
                  resizeMode: 'contain',
                  margin: 30,
                }}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={userEmail}
                onChangeText={(UserEmail) =>
                  setUserEmail(UserEmail)
                }
                placeholder="Enter Email" //dummy@abc.com
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={() =>
                  passwordInputRef.current &&
                  passwordInputRef.current.focus()
                }
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                value={userPassword}
                onChangeText={(UserPassword) =>
                  setUserPassword(UserPassword)
                }
                placeholder="Enter Password" //12345
                placeholderTextColor="#8b9cb5"
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                underlineColorAndroid="#f000"
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => login(userEmail, userPassword)}
              >
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <Text
              style={styles.registerTextStyle}
              onPress={() => navigation.navigate('Registration')}>
              Don't have an acount? Create here
            </Text>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default Login;
 
const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#F6C026',
    borderWidth: 0,
    color: '#FFFFFF',
    // borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontWeight:'600',
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    // color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});