import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerBG}>
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Публікації</Text>
        </View>
        <View style={styles.containerImage}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Image
              style={styles.image}
              source={require("../assets/images/log-out.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerUser}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerBG: {
    backgroundColor: "#FFFFFF",
  },

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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
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
  containerUser: {
    flex: 1,
    width: 240,
    height: 240,
    backgroundColor: "#462121",
  },
});

export default HomeScreen;
