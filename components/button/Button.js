import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.submitButton}
      // activeOpacity={0.7} 
      > 
    
      <Text style={styles.submitButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#325ca8",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },

  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});

