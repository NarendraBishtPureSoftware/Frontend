import React from "react";
import { Image, View, StyleSheet } from "react-native";
const Header = () => {
  return (
    <View style={styles.headers}>
      <Image
        source={require("../assets/logo.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
});

export default Header;
