import {
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Entypo';
import { ALERT_TYPE, Toast } from "react-native-alert-notification";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from '@react-native-firebase/auth';

const Account = ({navigation}) => {
  let admins = ['sukhvindrasingh9670@gmail.com'];
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh1 = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        Toast.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Logout',
          textBody: 'Logout Successfully',
        });
        navigation.navigate('Login');
      });
  };
  reauthenticate = (currentPassword) => {
    var user = auth().currentUser;
    var cred = auth.EmailAuthProvider.credential(
        user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }
  changePassword = (currentPassword, newPassword) => {
    this.reauthenticate(currentPassword).then(() => {
      var user = auth().currentUser;
      user.updatePassword(newPassword).then(() => {
        console.log("Password updated!");
      }).catch((error) => { console.log(error); });
    }).catch((error) => { console.log(error); });
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1F1F39'}}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh1} />
        }>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}>
            Account
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          {/* <Image
            source={{ uri: auth.currentUser.photoURL }}
            style={{ width: 120, height: 120, borderRadius: 60 }}
          /> */}
        </View>
        <View style={{padding: 20}}>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
            onPress={() => navigation.navigate('MyCourses')}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              My Courses
            </Text>
            <Icon name="chevron-right" size={24} color="white" />
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
            onPress={() => navigation.navigate('MyNotes')}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              My Notes
            </Text>
            <Icon name="chevron-right" size={24} color="white" />
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
            onPress={() => navigation.navigate('PaymentHistory')}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              Payment History
            </Text>
            <Icon name="chevron-right" size={24} color="white" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
            onPress={() => navigation.navigate('Profile')}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              Profile
            </Text>
            <Icon name="chevron-right" size={24} color="white" />
          </Pressable>
          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
            onPress={() => navigation.navigate('Help')}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              Help
            </Text>
            <Icon name="chevron-right" size={24} color="white" />
          </Pressable>

          <Pressable
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: 15,
            }}
            onPress={() => navigation.navigate('Dashboard')}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              Dashboard
            </Text>
            <Icon name="chevron-right" size={24} color="white" />
          </Pressable>
        </View>

        <View style={{alignItems: 'center'}}>
          <Pressable
          onPress={()=> changePassword("12345678","123456")}
            style={{
              backgroundColor: '#3D5CFF',
              paddingVertical: 10,
              alignItems: 'center',
              width: '50%',
              borderRadius: 10,
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              Change Password
            </Text>
          </Pressable>
          <Pressable
            onPress={() => handleLogout()}
            style={{
              backgroundColor: '#3D5CFF',
              paddingVertical: 10,
              alignItems: 'center',
              width: '50%',
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
              Logout
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Account;
