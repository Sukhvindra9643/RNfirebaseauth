import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/AntDesign.js"
import Icon1 from "react-native-vector-icons/Entypo.js"
import Icon2 from "react-native-vector-icons/Ionicons.js"
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons.js"
import HomeScreen from '../screens/HomeScreen.jsx';
import SearchScreen from '../screens/SearchScreen.jsx';
import CourseScreen from '../screens/CourseScreen.jsx';
import MessagesScreen from '../screens/MessagesScreen.jsx';
import Account from '../screens/Account.jsx';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
   <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            height: 65,
            paddingHorizontal: 5,
            padding: 10,
            backgroundColor: "#2F3C7E",
            position: "absolute",
            borderTopWidth: 0,
            marginBottom: 0,
            justifyContent: "space-evenly",
            width: "95%",
            alignItems: "center",
            left: "2%",
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 1,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            paddingBottom: 5,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: {
              fontSize: 13,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon1 name='home' size={30} color={"black"}/>
              ) : (
                <Icon name='home' size={30} color={"white"}/>
              ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarLabel: "Search",
            tabBarLabelStyle: {
              fontSize: 13,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon2 name="search" size={30} color="black" />
              ) : (
                <Icon2 name="search-outline" size={30} color="white" />
              ),
          }}
        />
        <Tab.Screen
          name="courses"
          component={CourseScreen}
          options={{
            tabBarLabel: "Courses",
            tabBarLabelStyle: {
              fontSize: 13,
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon2 name="ios-play-circle" size={30} color="black" />
              ) : (
                <Icon2
                  name="ios-play-circle-outline"
                  size={30}
                  color="white"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesScreen}
          options={{
            tabBarLabel: "Messages",
            tabBarLabelStyle: {
              fontSize: 13,
              color: "white",
              fontWeight: "bold",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon3
                  name="message-processing"
                  size={30}
                  color="black"
                />
              ) : (
                <Icon3
                  name="message-processing-outline"
                  size={30}
                  color="white"
                />
              ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarLabel: "Account",
            tabBarLabelStyle: {
              fontSize: 13,
              color: "white",
              fontWeight: "bold",
            },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Icon2 name="person" size={30} color="black" />
              ) : (
                <Icon2 name="person-outline" size={30} color="white" />
              ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabNavigator;
