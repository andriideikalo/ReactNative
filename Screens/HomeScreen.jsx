import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Публікації</Text>
      </View>
      <View style={styles.containerImage}>
        <Image
          style={styles.image}
          source={require("../assets/images/log-out.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    height: 88,
    position: "absolute",
    left: 0,
    right: 0,
  },
  containerTitle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 44,
  },
  title: {
    color: "#212121",
    fontSize: 17,
    fontWeight: "500",
    lineHeight: 22,
    paddingVertical: 11,
    paddingHorizontal: 49,
  },
  containerImage: {
    alignItems: "flex-end",
    marginRight: 16,
    marginTop: 44,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default HomeScreen;
