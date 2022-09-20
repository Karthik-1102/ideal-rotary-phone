import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import OcticonIcon from "react-native-vector-icons/Octicons";

// import { useDimensions } from " @react-native-community/hooks";

export default function App() {
  return (
    <>
      <View>
        <ImageBackground
          style={styles.image}
          source={require("./assets/ChinaTaiwan.jpg")}
          resizeMode="cover"
        >
          <View
            style={{
              position: "absolute",
            }}
          >
            <Text style={styles.text}>
              Will China invade Taiwan {"\n"}before end of september?
            </Text>
          </View>
          <Icon
            name="arrow-redo"
            color="white"
            size={18}
            left="300"
            style={{ position: "absolute", top: 10, left: 350 }}
          />
          <OcticonIcon
            name="arrow-switch"
            color="white"
            size={30}
            style={{ position: "absolute", top: 280, left: 350 }}
          />
        </ImageBackground>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    top: 20,
    height: 350,
    width: 400,
  },
  text: {
    fontSize: 27,
    fontFamily: "sans-serif",
    color: "white",
    top: 260,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
});
