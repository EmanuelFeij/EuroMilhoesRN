import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";


const APP_NAME = "EuroMillions Randomizer";

export default function App() {
  return (
    <View style={styles.container}>
      <Header name={APP_NAME}  style={styles.header}/>
      <MainContainer style={styles.mainContainer}/>
      <Footer style={styles.footer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",

  },
  header: {
    width: "100%",
    height:"20%",
  },
  mainContainer:{
    width: "100%",
    height:"75%"
  },
  footer:{
    width: "100%",
    height:"7%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    marginVertical: 20,
  }
});
