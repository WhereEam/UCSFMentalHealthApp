import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./app/screens/Login.js";
import HomeScreen from "./app/screens/HomeScreen.js";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});