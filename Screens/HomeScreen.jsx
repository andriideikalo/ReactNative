import React from "react";
import { View, Text, StyleSheet } from "react-native";
export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Публікації</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 44,
    position: "absolute",
    left: 0,
    right: 0,
    top: 55,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    color: "#212121",
    alignItems: "center",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 35,
  },
});

export default HomeScreen;
