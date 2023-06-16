import React from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoContainer}>
        <Image
          style={styles.photoIcons}
          source={require("../assets/images/notPhoto.png")}
        />
      </View>
      <Text style={styles.placeholderPhoto}>Завантажте фото</Text>
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
    paddingLeft: 16,
    paddingRight: 16,
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
  photoIcons: {
    width: 60,
    height: 60,
  },
  photoContainer: {
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    position: "relative",
    marginTop: 32,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderPhoto: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "left",
  },
});

export default CreatePostsScreen;
