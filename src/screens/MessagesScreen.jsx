import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    Image,
    RefreshControl,
  } from "react-native";
  import React, { useLayoutEffect } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Notification from "../components/Notification.jsx";
  import Messages from "../components/Messages.jsx";
  import { collection, getDocs } from "firebase/firestore";
  import { db } from "../firebase";
  import Loader from "../components/Loader.jsx";
//   import { getAuth } from "firebase/auth";
  
//   const auth = getAuth();
  const MessagesScreen = ({ navigation }) => {
    const [selected, setSelected] = React.useState("Notifications");
    const [chats, setChats] = React.useState([]);
    const [notifications, setNotifications] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [courses, setCourses] = React.useState([]);
  
    const [refreshing, setRefreshing] = React.useState(false);
  
    const onRefresh1 = React.useCallback(() => {
      setRefreshing(true);
      getAllChats();
    }, []);
  
    const onRefresh2 = React.useCallback(() => {
      setRefreshing(true);
      getAllNotification();
    }, []);
  
    const getAllNotification = async () => {
      let data = [];
  
    //   const querySnapshot = await getDocs(collection(db, "Notification"));
    //   querySnapshot.forEach((doc) => {
    //     let document = doc.data();
    //     data.push(document);
    //   });
      setNotifications(data);
      setLoading(false);
      setRefreshing(false);
    };
    const getAllChats = async () => {
      let data1 = [];
  
    //   const querySnapshot1 = await getDocs(collection(db, "MyCourses"));
    //   querySnapshot1.forEach((doc) => {
    //     let document = doc.data();
    //     if (auth?.currentUser?.uid === document.uid) {
    //       data1.push({
    //         name: document.courseName,
    //         authorName: document.authorName,
    //         thumbnail: document.thumbnail,
    //         timestamp: document.timestamp,
    //       });
    //     }
    //   });
      setChats(data1);
    };
  
    useLayoutEffect(() => {
      getAllNotification();
      getAllChats();
    }, []);
  
    return loading ? (
      <Loader />
    ) : (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#1F1F39" }}>
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 25, color: "white", fontWeight: "bold" }}>
            Notifications
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          <Pressable
            style={
              selected === "Chats"
                ? {
                    borderBottomWidth: 2,
                    borderBottomColor: "#3D5CFF",
                    paddingBottom: 5,
                  }
                : { paddingBottom: 5 }
            }
            onPress={() => setSelected("Chats")}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>
              Messages
            </Text>
          </Pressable>
          <Pressable
            style={
              selected === "Notifications"
                ? {
                    borderBottomWidth: 2,
                    borderBottomColor: "#3D5CFF",
                    paddingBottom: 5,
                  }
                : { paddingBottom: 5 }
            }
            onPress={() => setSelected("Notifications")}
          >
            <Text style={{ fontSize: 20, color: "white", fontWeight: "500" }}>
              Notifications
            </Text>
          </Pressable>
        </View>
        {selected === "Chats" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: "12%" }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh1} />
            }
          >
            {chats.length > 0 ? (
              <View style={{ padding: 20 }}>
                {chats.map((item, index) => (
                  <Pressable
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      backgroundColor: "#2F2F42",
                      padding: 10,
                      borderRadius: 10,
                    }}
                    onPress={() =>
                      navigation.navigate("ChatScreen", {
                        course: item,
                        students: courses,
                      })
                    }
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "#fff",
                          borderRadius: 50,
                        }}
                      >
                        <Image
                          source={{ uri: item.thumbnail }}
                          style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: "white",
                            fontWeight: "500",
                          }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 13,
                            color: "white",
                            fontWeight: "500",
                          }}
                        >
                          {item.authorName}
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{ fontSize: 15, color: "white", fontWeight: "500" }}
                    >
                      {/* {item.createdAt} */}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ) : (
              <View
                style={{
                  marginTop: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Messages />
              </View>
            )}
          </ScrollView>
        )}
  
        {selected === "Notifications" && (
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ marginBottom: "12%" }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh2} />
            }
          >
            {notifications.length > 0 ? (
              <View style={{ padding: 20 }}>
                {notifications.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginVertical: 5,
                      backgroundColor: "#2F2F42",
                      padding: 10,
                      borderRadius: 10,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View
                        style={{
                          width: 50,
                          height: 50,
                          backgroundColor: "#fff",
                          borderRadius: 50,
                        }}
                      >
                        <Image
                          source={{ uri: auth?.currentUser?.photoURL }}
                          style={{ width: 50, height: 50, borderRadius: 50 }}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <Text
                          style={{
                            fontSize: 18,
                            color: "white",
                            fontWeight: "500",
                          }}
                        >
                          {item.title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 15,
                            color: "white",
                            fontWeight: "500",
                          }}
                        >
                          {item.msg}
                        </Text>
                      </View>
                    </View>
                    <Text
                      style={{ fontSize: 15, color: "white", fontWeight: "500" }}
                    >
                      {/* {item.timestamp} */} 12:00
                    </Text>
                  </View>
                ))}
              </View>
            ) : (
              <View
                style={{
                  marginTop: "35%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Notification />
              </View>
            )}
          </ScrollView>
        )}
      </SafeAreaView>
    );
  };
  
  export default MessagesScreen;
  
  const styles = StyleSheet.create({});
  