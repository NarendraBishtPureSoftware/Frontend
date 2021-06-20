import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

import ProductContainer from "./Screens/Products/ProductContainer";
import Header from "./Shared/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProductContainer />
    </SafeAreaView>
  );
}

const calcNotchHeight = () => {
  let notchHeight = 0;
  if (Platform.OS === "android" && StatusBar.currentHeight > 24) {
    notchHeight = StatusBar.currentHeight;
  }
  return notchHeight;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: calcNotchHeight(),
  },
});
