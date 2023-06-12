import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userData } = route.params;
  return (
    <View>
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
      </View>
      <View style={styles.containerCard}>
        {userData.photo ? (
          <Image style={styles.cardPhoto} source={{ uri: userData.photo }} />
        ) : (
          <Image
            style={styles.cardPhoto}
            source={require("../assets/images/user-avatar.png")}
          />
        )}
        <View>
          <Text style={styles.cardLogin}>{userData.login}</Text>
          <Text style={styles.cardEmail}>{userData.email}</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              null;
            }}>
            <Text style={styles.btnText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 13,
    width: 70,
    alignSelf: "center",
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
});

export default HomeScreen;
