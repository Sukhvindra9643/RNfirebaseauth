import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';

const Splash = ({navigation}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    setTimeout(() => {

      if (user === null) {
        console.log("login",user);
        navigation.navigate('Login');
      } else {
        console.log("parent",user);
        navigation.replace('Parent');
      }
    }, 2000);
  }, []);
  if (initializing) return null;
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
