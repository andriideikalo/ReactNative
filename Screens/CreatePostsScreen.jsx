import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { useNavigation } from "@react-navigation/native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerBG}></View>

      <View style={styles.containerCard}></View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            null;
          }}>
          <Image
            style={styles.btnImage}
            source={require("../assets/images/trash.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  containerBG: {
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
  btnImage: {
    width: 24,
    height: 24,
  },
  containerCard: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 100,
    height: 60,
    backgroundColor: "#FFFFFF",
  },
  cardLogin: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
  },
  cardEmail: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
  },
  cardPhoto: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  btnContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 13,
    width: 70,
    alignSelf: "center",
  },
});

export default CreatePostsScreen;
