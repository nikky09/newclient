import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { CameraView, Camera } from "expo-camera/next";
import Scan from "./Scan";

export default function App() {
  const [hasPermission, setHasPermission] = useState();
  const [scanned, setScanned] = useState(false);
  // const [concatenatedString, setConcatenatedString] = useState(null);
  useEffect(() => {
    const getCameraPermissions = async()=> {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    }; 
    getCameraPermissions();
  }, []);

  const handleBarCodeScanned = ({type, data })=> {
    setScanned(true);
    console.log(`Bar code with type ${type} and data ${data} has been scanned!`);
    console.log(data)
    return {type,data};
     };

  if(hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if(hasPermission === false) {
    return <Text>No access to camera</Text>;
    
    // const string1 = 'data';
    //  const string2 = 'React Native';
    
  // Concatenate the strings and store the result into a variable
  //  const concatenatedString = string1 + ' ' + string2;
   }
  
  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barCodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
       {/* <Text>hello</Text> */}
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
      <Text>{scanned}</Text>

      
      {/* {concatenatedString && <Text>{concatenatedString}</Text>} */}

    </View>
  ); 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});