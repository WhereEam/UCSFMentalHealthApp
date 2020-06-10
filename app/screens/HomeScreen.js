import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen() {
  const handlePress = () => console.log("Text Pressed");

  return (
    <ImageBackground
      source={require("../picture/homeScreenBg.png")}
      style={styles.bgImage}
    >
      <Text style={styles.levelText} numberOfLines={1} onPress={handlePress}>
        Level 1
      </Text>
      <Text style={styles.textWelcome} numberOfLines={3} onPress={handlePress}>
        <Text style={styles.textWeclomeTitle}>Hi Joe!</Text>
        {"\n"}Scroll through your three fairy friends and pick one to learn more
        about them.
      </Text>
      <View style={styles.characters}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          style={styles.characterScroll}
        >
          <View>
            <Image
              source={require("../picture/aurora.png")}
              style={styles.characterImg}
            />
          </View>
          <View>
            <Image
              source={require("../picture/flynn.png")}
              style={styles.characterImg}
            />
          </View>
          <View>
            <Image
              source={require("../picture/sprite.png")}
              style={styles.characterImg}
            />
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity style={styles.pickBtn}>
        <Image
          source={require("../picture/pickMeBtn.png")}
          style={styles.pickBtnImg}
        />
      </TouchableOpacity>
      <Text style={styles.flynnInfo} numberOfLines={3} onPress={handlePress}>
        <Text style={styles.flynnInfoTitle}>Flynn</Text>
        {"\n"}Yo, I'm Flynn! I can teach you how to be strong and healthy like
        me through exercise and dance!
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  bgImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  textWeclomeTitle: {
    fontWeight: "500",
    fontSize: 24,
  },
  textWelcome: {
    borderColor: "#89AAFF",
    borderWidth: 2,
    borderRadius: 6,
    borderStyle: "solid",
    height: 110,
    margin: 20,
    padding: 10,
    fontFamily: "Avenir",
    fontSize: 16,
    position: "absolute",
    top: 90,
    backgroundColor: "#fff",
  },
  levelText: {
    color: "#fff",
    fontWeight: "bold",
    width: 65,
    height: 27,
    left: 293,
    top: 47,
    position: "absolute",
  },
  absoluteView: {
    flex: 1,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  pickBtnImg: {
    width: 104,
    height: 40,
  },
  pickBtn: {
    position: "absolute",
    top: 521,
    left: 135,
  },
  flynnInfoTitle: {
    fontWeight: "500",
    fontSize: 24,
  },
  flynnInfo: {
    textAlign: "center",
    borderColor: "#89AAFF",
    borderWidth: 2,
    borderRadius: 6,
    borderStyle: "solid",
    height: 110,
    margin: 20,
    padding: 10,
    fontFamily: "Avenir",
    fontSize: 14,
    position: "absolute",
    left: 8,
    bottom: 78,
    backgroundColor: "#fff",
  },
  characters: {
    flex: 1,
    height: 250,
    marginTop: 20,
    position: "absolute",
    top: 220,
    justifyContent: "space-between",
    flexDirection: "column",
  },
  characterScroll: {},
  characterImg: {
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    width: 120,
    height: 240,
  },
});
