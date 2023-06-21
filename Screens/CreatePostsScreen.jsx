import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";

export const CreatePostsScreen = ({ navigation }) => {
  const [isFocusedName, setIsFocusedName] = useState(false);
  const [name, setName] = useState("");
  const [isFocusedLocality, setIsFocusedLocality] = useState(false);
  const [locality, setLocality] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [photoCard, setPhotoCard] = useState(null);
  // підключення камери
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      await ImagePicker.requestMediaLibraryPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // __________________________

  const handleFocusName = () => {
    setIsFocusedName(true);
  };

  const handleBlurName = () => {
    setIsFocusedName(false);
  };

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleFocusLocality = () => {
    setIsFocusedLocality(true);
  };

  const handleBlurLocality = () => {
    setIsFocusedLocality(false);
  };

  const handleLocalityChange = (text) => {
    setLocality(text);
  };

  const handleCardPhoto = () => {
    const cardPhoto = {
      photo: photoCard,
      name,
      locality,
    };
    if (photoCard && name && locality) {
      // setIsLoggedIn(true);
      // navigation.navigate("PostsScreen", { photoCard: cardPhoto });
      console.log(cardPhoto);
      setPhotoCard("");
      setName("");
      setLocality("");
    } else if (!photoCard.photoUri && !name && !locality) {
      console.log("Заповніть всі поля та додайте фото");
    }
  };

  const handleSelectPhoto = async () => {
    // Запит на доступ до фото
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setPhotoCard(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.photoContainer}> */}
      {/* <TouchableOpacity
        style={styles.photoContainer}
        onPress={handleSelectPhoto}> */}
      <Camera style={styles.camera} type={type} ref={setCameraRef}>
        <View style={styles.photoView}>
          <TouchableOpacity
            style={styles.flipContainer}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Flip{" "}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={async () => {
              if (cameraRef) {
                const { uri } = await cameraRef.takePictureAsync();
                await MediaLibrary.createAssetAsync(uri);
              }
            }}>
            <View style={styles.takePhotoOut}>
              <View style={styles.takePhotoInner}></View>
            </View>
          </TouchableOpacity>
        </View>
      </Camera>
      {/* <Image
          style={[styles.photoIcons, photoCard && styles.newPhoto]}
          source={
            photoCard
              ? { uri: photoCard }
              : require("../assets/images/notPhoto.png")
          }
        /> */}
      {/* </TouchableOpacity> */}
      {/* </View> */}
      <TouchableOpacity onPress={handleSelectPhoto}>
        <Text
          style={[
            styles.placeholderPhoto,
            photoCard && styles.placeholderHiden,
          ]}>
          Завантажте фото
        </Text>
      </TouchableOpacity>
      <TextInput
        placeholder="Назва..."
        style={[styles.textInput, isFocusedName && styles.textInputFocused]}
        value={name}
        onChangeText={handleNameChange}
        onFocus={handleFocusName}
        onBlur={handleBlurName}
      />
      <View
        style={[
          styles.containerMap,
          isFocusedLocality && styles.containerMapFocused,
        ]}>
        <Image
          style={styles.icon}
          source={require("../assets/images/map-pin.png")}
        />
        <TextInput
          placeholder="Місцевість ..."
          style={[styles.locationInput]}
          value={locality}
          onChangeText={handleLocalityChange}
          onFocus={handleFocusLocality}
          onBlur={handleBlurLocality}
        />
      </View>
      <View style={styles.btnContainerAddPhoto}>
        <TouchableOpacity style={styles.btnAddPhoto} onPress={handleCardPhoto}>
          <Text style={styles.btnText}>Опублікувати</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        {/* <TouchableOpacity style={styles.btn} onPress={() => null}>
          <Image
            style={styles.btnImage}
            source={require("../assets/images/trash.png")}
          />
        </TouchableOpacity> */}
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
  newPhoto: {
    width: "100%",
    height: 240,
    backgroundColor: "#E8E8E8",
    position: "relative",
    // marginTop: 32,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderPhoto: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "left",
    color: "#BDBDBD",
  },
  placeholderHiden: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "left",
    opacity: 0,
  },
  textInput: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  textInputFocused: {
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  locationInput: {
    // flex: 1,
  },

  btnContainerAddPhoto: {
    marginTop: 32,
  },
  btnAddPhoto: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    alignItems: "center",
    paddingVertical: 12,
  },
  btnText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "400",
  },
  containerMap: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
  containerMapFocused: {
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  camera: { flex: 1 },
  photoView: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },

  flipContainer: {
    flex: 0.1,
    alignSelf: "flex-end",
  },

  button: { alignSelf: "center" },

  takePhotoOut: {
    borderWidth: 2,
    borderColor: "white",
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },

  takePhotoInner: {
    borderWidth: 2,
    borderColor: "white",
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 50,
  },
});

export default CreatePostsScreen;
