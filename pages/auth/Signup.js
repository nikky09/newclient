import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Button from "../../components/button/Button";
import * as yup from "yup"; // Import Yup
import { useNavigation } from "@react-navigation/native"; // Import useNavigation
import axios from "../../axios";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  name: yup.string().required("Name is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const screenWidth = Dimensions.get("window").width;
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      // Validate the form data against the schema
      // await validationSchema.validate(
      //   { email, password, confirmPassword },
      //   { abortEarly: false }
      // );

      // If validation succeeds, proceed with registration

      const payload = {
        fullname: name,
        email: email,
        password: password,
        phone: phone,
      };
      console.log(payload);

      try {
        await axios.post("/auth/register", payload).then((res) => {
          console.log(res.data);
          if (res.data) {
            navigation.navigate("Login");
          }       
        });
       
        
      } catch (error) {
        console.log("err", error.message);
      }
    } catch (error) {
      // Handle validation errors and set error messages
      error.inner.forEach((err) => {
        if (err.path === "email") {
          setEmailError(err.message);
        } else if (err.path === "name") {
          setNameError(err.message);
        } else if (err.path === "password") {
          setPasswordError(err.message);
        } else if (err.path === "confirmPassword") {
          setConfirmPasswordError(err.message);
        } else if (err.path === "phone") {
          setPhoneError(err.message);
        }
      });
    }
  };

  const handleRedirect = () => {
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sign up</Text>
        </View>
        <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Full Name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.errorText}>{nameError}</Text>
        </View>
        <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <Text style={styles.errorText}>{emailError}</Text>
        </View>
        <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
          <Text style={styles.label}>Phone number</Text>
          <TextInput
            style={styles.input}
            value={phone}
            placeholder="Enter Your Phone Number"
            keyboardType={"number-pad"}
            onChangeText={(text) => setPhone(text)}
          />
          <Text style={styles.errorText}>{phoneError}</Text>
        </View>
        <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Your Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Text style={styles.errorText}>{passwordError}</Text>
        </View>
        {/* <View style={[styles.formItem, { width: screenWidth * 0.8 }]}>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
              secureTextEntry={true}
            />
            <Text style={styles.errorText}>{confirmPasswordError}</Text>
          </View> */}
        <Button text={"Submit"} onPress={handleSignUp} />
        <TouchableOpacity
          style={styles.regButton}
          // activeOpacity={0.7}
          onPress={handleRedirect}
        >
          <Text style={styles.regLink}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    paddingTop: 100,
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

  pickerContainer: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    overflow: "hidden",
  },

  picker: {
    width: "100%",
    height: 50,
  },

  errorText: {
    color: "red",
  },
});
