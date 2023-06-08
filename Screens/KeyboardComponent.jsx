import React from "react";
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
} from "react-native";

export const KeyboardComponent = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.title}>Реєстрація</Text>
          <TextInput placeholder="Логін" style={styles.textInput} />
          <TextInput
            placeholder="Адреса електронної пошти"
            style={styles.textInput}
          />
          <TextInput placeholder="Пароль" style={styles.textInput} />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => null}>
              <Text style={styles.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.futerContainer}>
            <Text style={styles.futer}>Вже є акаунт? </Text>
            <TouchableOpacity onPress={() => null}>
              <Text style={styles.futer}>Увійти</Text>
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
    borderRadius: 25,
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
});

export default KeyboardComponent;
