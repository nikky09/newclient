import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/Signup";
import Toast from "react-native-toast-message";
import Home from "./pages/home/Home";
import Scan from "./pages/scan/Scan";
import Sca from "./pages/scan/Sca";
// import { Camera } from "expo-camera";
// import Sca from "./pages/scan/Camera";
import  Cam  from "./pages/scan/Cam";
import Pikerr from "./pages/scan/Pikerr"; 
// import Decry from "./pages/scan/Decry"; 
const Stack = createStackNavigator();
function AppNavigator(navi) {
  return (
    <NavigationContainer>
      <Toast />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Sca"
          component={Sca}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cam"
          component={Cam}
          options={{ headerShown: false }}
        />
           

       <Stack.Screen
          name="Pikerr"
          component={Pikerr}
          options={{ headerShown: false }}
        />

   {/* <Stack.Screen
          name="Decry"
          component={Decry}
          options={{ headerShown: false }}
        /> */}


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
