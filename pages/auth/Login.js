import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import Button from "../../components/button/Button";
import * as yup from "yup"; // Import Yup

import axios from "../../axios";
import Toast from "react-native-toast-message";
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // await validationSchema.validate(
      //   { phone, password },
      //   { abortEarly: false }
      // );

      console.log("phone:", phone);
      console.log("Password:", password);

      const payload = {
        phone: phone,
        password: password,
      };

      console.log(payload);

      try {
        await axios.post("/auth/login", payload).then((res) => {
          // console.log(res.data.data.fullname);

          if (res.data.status == 200) {
            console.log(res.data.data);
            alert("User loggged in");

            navigation.navigate("Home");

            Toast.show({
              type: "success",
              position: "bottom",
              text2: `${res.message}`,
              visibilityTime: 3000,
            });
          }
        });
      } catch (error) {
        console.log("err", error);
        alert("Incorrect credentials, try again");

        Toast.show({
          type: "error",
          position: "bottom",
          text2: `${"error.message"}`,
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      // Handle validation errors and set error messages
      error?.inner?.forEach((err) => {
        if (err.path === "phone") {
          setPhoneError(err.message);
        } else if (err.path === "password") {
          setPasswordError(err.message);
        }
      });
    }
  };

  const handleRedirect = () => {
    navigation.navigate("Signup");
  };
  const screenWidth = Dimensions.get("window").width;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Log in</Text>
      </View>
      <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
        <Text style={styles.label}>Phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your Phone Number"
          value={phone}
          keyboardType={"number-pad"}
          onChangeText={(text) => setPhone(text)}
        />
        <Text style={styles.errorText}>{phoneError}</Text>
      </View>
      <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Text style={styles.errorText}>{passwordError}</Text>
      </View>

      <Button text={"submit"} onPress={handleLogin} />

      <TouchableOpacity
        onPress={handleRedirect}
        style={styles.regButton}
        activeOpacity={0.7}
      >
        <Text style={styles.regLink}>No account? Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
  },

  header: {
    marginBottom: 20,
  },

  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#325ca8",
  },

  formItem: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: "100%",
  },

  label: {
    fontWeight: "bold",
    marginBottom: 10,
  },

  submitButton: {
    backgroundColor: "#325ca8",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  regButton: {
    marginTop: 10,
  },

  regLink: {
    color: "#325ca8",
  },

  errorText: {
    color: "red",
  },
});
