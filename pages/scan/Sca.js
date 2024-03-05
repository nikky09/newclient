import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import { data2 } from "../home/Home"; 
// import { useEffect } from "react";
// Import useNavigation
// const sum1 = useContext(data1);
// const sum2 = useContext(data2);
const Sca = (navi) => { 
const sum2 = useContext(data2);

//  const sum2 = useContext(data2);
// const takeScreenShot = () => {
//     ref.current.capture().then((uri) => {
//       // Save the screenshot to the gallery
//       CameraRoll.save(uri, { type: 'photo', album:'QR codes' });
//       alert('Screenshot saved to gallery!');
//     });
//   }; 
console.log(navi.route.params.some);
const {one} = navi.route.params.some;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    {/* <QRCode value="http://awesome.link.qr" /> */}

                    <QRCode value={navi.route.params.some} size={Dimensions.get("window").width / 2}
                        // size={200}

                    />
                    {/* {sum1} */}
                    
                    {/* <QRCode value={sum2}
                        size={200}
                    /> */}
                    {/* { { {data1 ? (
                    <Text style={{ marginTop: 10 }}>QR Code Data: {data1}</Text>
                ) : null} }} */}

                </TouchableOpacity>
        
        
        {/* <TouchableOpacity style={styles.btn} onPress={takeScreenShot}>
                      
                      <Text style={styles.text}>Take screenshot</Text> 
                      { < Scan data={first} /> }
            </TouchableOpacity> */}      
                 
            </View>
        </ScrollView>
    );
};

export default Sca;

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

    btn: {
        backgroundColor: "#325ca8",
        borderRadius: 5,
        padding: 20,
        width: 200,
        alignItems: "center",
        margin: 20,
    },

    text: {
        color: "#fff",
        fontWeight: "bold",
    },
});  