import { View, Text, TouchableOpacity,Image} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";


const Messages = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1F1F39" }}>
      <View >
        <Image source={require("../../assets/images/nomessage.png")} style={{width:200,height:200}}/>
        <Text style={{color:"#fff",fontSize:18,width:200,textAlign:"center"}}>No Messages yet!</Text>
        <Text style={{color:"#B8B8D2",fontSize:13,width:200,textAlign:"center"}}>We'll notify you once we have something for you</Text>
      </View>
    </SafeAreaView>
  );
};

export default Messages
