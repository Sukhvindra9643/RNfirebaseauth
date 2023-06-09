import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ALERT_TYPE, Toast} from 'react-native-alert-notification';
import {BottomModal} from 'react-native-modals';
import {SlideAnimation} from 'react-native-modals';
import {ModalContent} from 'react-native-modals';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
//   import AsyncStorage from '@react-native-async-storage/async-storage'
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modelVisible, setModelVisible] = useState(false);

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Parent');
      })
      .catch(error => {
        if (error.code === 'auth/user-not-found') {
          Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Sign In',
            textBody: 'User not found',
          });
        }
        if (error.code === 'auth/wrong-password') {
          Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Sign In',
            textBody: 'Wrong Password',
          });
        }
        Toast.show({
          type: ALERT_TYPE.DANGER,
          title: 'Sign In',
          textBody: 'Wrong Password',
        });
        console.error(error.code);
      });
  };

  const forgotPassword = () => {
    if (!email) {
      Toast.show({
        type: ALERT_TYPE.WARNING,
        title: 'Forgot Password',
        textBody: `Please enter your email`,
      });
      return;
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(function (user) {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Forgot Password',
          textBody: `Please check your ${email} email`,
        });
      })
      .catch(function (e) {
        console.log(e);
      });
    setModelVisible(false);
  };

  // const onGoogleButtonPress = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     await GoogleSignin.signOut();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log("usr",userInfo);
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log("user cancelled the login flow");
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.log("operation (e.g. sign in) is in progress already");
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.log("play services not available or outdated");
  //     } else {
  //       // some other error happened
  //       console.log(error);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   GoogleSignin.configure({ webClientId: '401277392051-cqtnlch9p1vcrajtjs5tjrig4fu5eefq.apps.googleusercontent.com'});
  // }, []);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1F1F39'}}>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 25, color: '#fff', fontWeight: '700'}}>
          Log In
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#2F2F42',
          height: '100%',
          borderRadius: 15,
        }}>
        <View style={{padding: 15}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '700',
                width: '90%',
              }}>
              Your Email
            </Text>
            <TextInput
              style={{
                width: '90%',
                backgroundColor: '#3E3E55',
                padding: 10,
                borderRadius: 10,
                fontSize: 17,
                color: '#fff',
              }}
              onChangeText={nameText => setEmail(nameText)}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '700',
                width: '90%',
              }}>
              Password
            </Text>
            <TextInput
              style={{
                width: '90%',
                backgroundColor: '#3E3E55',
                padding: 10,
                borderRadius: 10,
                fontSize: 17,
                color: '#fff',
              }}
              onChangeText={nameText => setPassword(nameText)}
              secureTextEntry={true}
            />
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              marginBottom: 15,
              gap: 5,
              paddingRight: 20,
            }}>
            <Text
              style={{color: '#B8B8D2'}}
              onPress={() => setModelVisible(!modelVisible)}>
              Forgot password
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <TouchableOpacity style={styles.btn} onPress={() => handleSignIn()}>
              <Text style={{fontSize: 20, color: '#fff'}}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                textAlign: 'center',
                fontWeight: '500',
              }}>
              Don't have an account?{' '}
              <Text
                style={{color: '#3D5CFF'}}
                onPress={() => navigation.navigate('SignUp')}>
                Sign Up
              </Text>
            </Text>
          </View>
          {/* <View
            style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
            <TouchableOpacity
              onPress={() => onGoogleButtonPress()}
              style={{
                width: 230,
                padding: 7,
                backgroundColor: '#3D5CFF',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <Icon name="google" color="white" size={23} />
              <Text style={{color: 'white', fontSize: 18}}>
                Sign In With Google
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{width: '100%', alignItems: 'center', marginVertical: 10}}>
            <TouchableOpacity
              style={{
                width: 230,
                padding: 7,
                backgroundColor: '#3D5CFF',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <Icon1 name="smartphone" color="white" size={23} />
              <Text style={{color: 'white', fontSize: 18}}>
                Continue with phone
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModelVisible(!modelVisible)}
        swipeDirection={['up', 'down']}
        style={{
          backgroundColor: '#1F1F39',
        }}
        modalAnimation={new SlideAnimation({slideFrom: 'bottom'})}
        onHardwareBackPress={() => setModelVisible(!modelVisible)}
        visible={modelVisible}
        onTouchOutside={() => setModelVisible(!modelVisible)}>
        <ModalContent
          style={{
            width: '100%',
            height: 470,
            backgroundColor: '#2F2F42',
          }}>
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 24, color: 'white'}}>Forgot password</Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
              gap: 5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: '#fff',
                fontWeight: '700',
                width: '90%',
              }}>
              Your Email
            </Text>
            <TextInput
              style={{
                width: '90%',
                backgroundColor: '#3E3E55',
                padding: 10,
                borderRadius: 10,
                fontSize: 17,
                color: '#fff',
              }}
              plaholderTextColor="#fff"
              placeholder="example@gmail.com"
              onChangeText={nameText => setEmail(nameText)}
            />
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => forgotPassword()}
              style={{
                marginTop: 5,
                marginLeft: 15,
                padding: 10,
                backgroundColor: '#3D5CFF',
                borderRadius: 10,
                paddingHorizontal: 30,
                width: '60%',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                Forgot Password
              </Text>
            </TouchableOpacity>
          </View>
        </ModalContent>
      </BottomModal>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#3D5CFF',
    paddingVertical: 10,
    alignItems: 'center',
    width: '90%',
    borderRadius: 10,
    justifyContent: 'center',
  },
});
