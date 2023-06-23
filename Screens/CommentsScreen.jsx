import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

export const CommentsScreen = ({ route }) => {
  const [isFocusedComents, setIsFocusedComents] = useState(false);
  const [coments, setComents] = useState("");
  const navigation = useNavigation();
  const { userData } = route.params;
  const { cardPhoto } = route.params;
  const handleFocusComents = () => {
    setIsFocusedComents(true);
  };

  const handleBlurComents = () => {
    setIsFocusedComents(false);
  };
  const handleComentsChange = (text) => {
    setComents(text);
  };
  const handleCardComents = () => {
    const cardComents = {
      coments,
    };
    if (coments) {
      // setIsLoggedIn(true);
      //   navigation.navigate("PostsScreen", {
      //     userData: userData,
      //     cardPhoto: cardPhoto,
      //   });
      console.log(cardComents);
    } else if (!coments) {
      console.log("Заповніть коментарі");
    }
    setСoments("");
  };
  const renderCard = () => {
    if (cardPhoto) {
      return (
        <View style={styles.containerСardPhoto}>
          <Image
            style={styles.photoCardItem}
            source={{ uri: cardPhoto.photoCard }}
          />

          {/* <View style={styles.cardName}>
            <Text style={styles.cardLogin}>{cardPhoto.name}</Text>
          </View> */}
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.containerBG}> */}
      {/* <View style={styles.containerTitle}>
          <Text style={styles.title}>Коментарі</Text>
        </View>
      </View> */}
      {renderCard()}
      <View style={styles.btnContainer}>
        <TextInput
          placeholder="Коментувати..."
          style={[
            styles.textInput,
            isFocusedComents && styles.textInputFocused,
          ]}
          value={coments}
          onChangeText={handleComentsChange}
          onFocus={handleFocusComents}
          onBlur={handleBlurComents}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => console.log(coments)}>
          <Text style={styles.btnText}>+</Text>
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
  photoCardItem: {
    width: "100%",
    height: 140,
    // marginTop: 32,
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

  icon: {
    width: 24,
    height: 24,
  },

  containerСardPhoto: {
    gap: 8,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    // left: 24,
    // right: 24,
    // alignItems: "center",
    marginBottom: 16,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 13,
    paddingHorizontal: 13,
    width: 50,
    alignSelf: "center",
    position: "absolute",
    right: 24,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  textInput: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    width: "100%",
  },
  textInputFocused: {
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
});

export default CommentsScreen;
