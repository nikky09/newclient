import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import avatar from "../../assets/avatar.webp";

const Header = ({ name }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.usernameView}>
        <Text style={styles.username}>{name}</Text>
      </View>

      <View style={styles.avatar}>
        <Image source={avatar} style={styles.avatarImage} />
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },

  username: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
});
