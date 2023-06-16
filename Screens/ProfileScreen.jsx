import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export const ProfileScreen = ({ route }) => {
  const { userData } = route.params;
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.image, { width, height }]}
        source={require("../assets/images/photoBG.png")}></ImageBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.containerBG}>
            <View style={styles.containerImage}>
              <View style={styles.photoContainer}>
                {userData.photo ? (
                  <Image
                    style={styles.photo}
                    source={{ uri: userData.photo }}
                  />
                ) : (
                  <Image
                    style={styles.photo}
                    source={require("../assets/images/user-avatar.png")}
                  />
                )}
                <View style={styles.textContainer}>
                  <Text style={styles.cardLogin}>{userData.login}</Text>
                  {/* <View style={styles.iconContainer}> */}
                  <TouchableOpacity
                    style={styles.iconContainer}
                    onPress={() => navigation.navigate("Login")}>
                    <Image
                      style={styles.icon}
                      source={require("../assets/images/log-out.png")}
                    />
                  </TouchableOpacity>
                  {/* </View> */}
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBG: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
  },
  containerImage: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
    justifyContent: "space-between",
  },
  cardLogin: {
    color: "#212121",
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 15,
  },
  photoContainer: {
    position: "relative",
    marginTop: -350,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginRight: 16,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 16,
  },
});
