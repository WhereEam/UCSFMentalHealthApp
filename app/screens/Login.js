import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Alert,
} from "react-native";

export default function Login() {
  return (
    <ImageBackground
      source={require("../picture/userInfoBg.png")}
      style={styles.image}
    >
      <Button
        color="#fff"
        title="Create An Account:)"
        onPress={() =>
          Alert.prompt(
            "Welcome!",
            "It's so nice to finally meet you! \n What should we call you?",
            (userInfo) => console.log(userInfo)
          )
        }
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
