import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export const KeyboardComponent = () => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handleFocusLogin = () => {
    setIsFocusedLogin(true);
  };

  const handleBlurLogin = () => {
    setIsFocusedLogin(false);
  };

  const handleFocusEmail = () => {
    setIsFocusedEmail(true);
  };

  const handleBlurEmail = () => {
    setIsFocusedEmail(false);
  };

  const handleFocusPass = () => {
    setIsFocusedPass(true);
  };

  const handleBlurPass = () => {
    setIsFocusedPass(false);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevVisible) => !prevVisible);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <View style={styles.photoContainer}>
            <Image
              style={styles.photo}
              source={require("../assets/images/user-avatar.png")}
            />
            <TouchableOpacity style={styles.btnPhoto} onPress={() => null}>
              <Icon name="pluscircleo" size={30} color="#FF6C00" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput
            placeholder="Логін"
            style={[
              styles.textInput,
              isFocusedLogin && styles.textInputFocused,
            ]}
            onFocus={handleFocusLogin}
            onBlur={handleBlurLogin}
          />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={[
              styles.textInput,
              isFocusedEmail && styles.textInputFocused,
            ]}
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
          />
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Пароль"
              style={[
                styles.textInput,
                isFocusedPass && styles.textInputFocused,
                styles.passwordInput,
              ]}
              secureTextEntry={!isPasswordVisible}
              value={password}
              onChangeText={handlePasswordChange}
              onFocus={handleFocusPass}
              onBlur={handleBlurPass}
            />
            <TouchableOpacity
              style={styles.passContainer}
              onPress={togglePasswordVisibility}>
              <Text
                name={isPasswordVisible ? "eye" : "eyeo"}
                style={styles.passText}>
                Показати
              </Text>
              {/* <Icon
                name={isPasswordVisible ? "eye" : "eyeo"}
                size={20}
                color="#000"
              /> */}
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => null}>
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.futerContainer}>
            <Text style={styles.futer}>Вже є акаунт? </Text>
            <TouchableOpacity onPress={() => null}>
              <Text style={styles.futerLink}>Увійти</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    gap: 16,
  },
  title: {
    fontSize: 30,
    marginBottom: 32,
    fontWeight: "500",
    lineHeight: 35,
    textAlign: "center",
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
  btnContainer: {
    marginTop: 12,
  },
  btn: {
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
  futerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  futer: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
  futerLink: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
    textDecorationLine: "underline",
  },
  photoContainer: {
    position: "relative",
    marginTop: -100,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  btnPhoto: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "transparent",
    padding: 8,
  },
  passwordInputContainer: {
    position: "relative",
  },
  passwordInput: {
    paddingRight: 40,
  },
  passContainer: {
    position: "absolute",
    top: 16,
    right: 16,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  passText: {
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    fontWeight: "400",
  },
});

export default KeyboardComponent;
