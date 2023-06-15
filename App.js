import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen";
import { HomeScreen } from "./Screens/HomeScreen";
import { ProfileScreen } from "./Screens/ProfileScreen";
import { CreatePostsScreen } from "./Screens/CreatePostsScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Registration">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            // headerTitle: "Публікації",
            // headerStyle: {
            //   ,
            // },
            //
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: "Створити публікацію",
          }}
          name="ProfileScreen"
          component={ProfileScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
            headerTitle: "Створити публікацію",
          }}
          name="CreatePostsScreen"
          component={CreatePostsScreen}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
