import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Toast, ALERT_TYPE} from 'react-native-alert-notification';
import Loader from '../components/Loader';
import auth from '@react-native-firebase/auth';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Toast.show({
            type: ALERT_TYPE.WARNING,
            title: 'Sign Up',
            textBody: 'That email address is already in use!',
          });
        }

        if (error.code === 'auth/invalid-email') {
          Toast.show({
            type: ALERT_TYPE.DANGER,
            title: 'Sign Up',
            textBody: 'That email address is invalid!',
          });
        }

        console.error(error);
      });
  };

  return loading ? (
    <Loader />
  ) : (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1F1F39'}}>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 25, color: '#fff', fontWeight: '700'}}>
          Sign Up
        </Text>
        <Text style={{fontSize: 16, color: '#fff', fontWeight: '400'}}>
          Enter your details below & free sign up
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#2F2F42',
          height: '90%',
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
              Your Name
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
              onChangeText={nameText => setName(nameText)}
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
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 15,
            }}>
            <TouchableOpacity style={styles.btn} onPress={()=> handleSignUp()}>
              <Text style={{fontSize: 20, color: '#fff'}}>Create account</Text>
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
              Already have an account?{' '}
              <Text
                style={{color: '#3D5CFF'}}
                onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

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
