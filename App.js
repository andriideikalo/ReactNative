import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
