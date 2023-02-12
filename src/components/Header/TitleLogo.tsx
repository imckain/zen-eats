import React from "react";
import { StyleSheet, Image } from "react-native";

export const TitleLogo = (_props) => {
  return (
    <Image style={styles.logo} source={require("../../../assets/logo.png")} />
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 40,
    width: 160,
    paddingBottom: 15,
    paddingTop: 5,
  },
});
