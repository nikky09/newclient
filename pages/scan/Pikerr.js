// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } 
// from "react-native";

// const UploadFile = () => {
//   const pickDocument = async () => {
//     let result = await DocumentPicker.getDocumentAsync({});
//     console.log(result.uri);
//     console.log(result);

// };


//   }; 
//   return (
//     <View style={styles.background}>
//       <Text style={styles.file}>Upload CSV File</Text>
//       <View style={styles.button}>
//         <TouchableOpacity>
//           <Button
//             title="upload your file"
//             color="black"
//             onPress={pickDocument}
//           />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   background: {
//     backgroundColor:
//       "radial-gradient(ellipse at left bottom,    rgb(163, 237, 255) 0%,    rgba(57, 232, 255, 0.9) 59%,    rgba(48, 223, 214, 0.9) 100% )",
//   },
//   file: {
//     color: "black",
//     marginHorizontal: 145,
//   },
//   button: {
//     marginHorizontal: 60,
//   },
// });

 // export default UploadFile;

 import React, { useEffect, useState } from "react";
 import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
 } from "react-native";
 import * as  DocumentPicker from "expo-document-picker";
 import  FileSystem from "expo-file-system";
 import { Buffer } from "buffer";  // Import the 'buffer' package to convert the encrypted file content to a Buffer
 import axios from "axios";       // Import the 'axios' package to send the encrypted file content to the server
import jestConfig from "../../CameraExample/jest.config";
 const MyComponent = () => {
  
       const [selectedDocument, setSelectedDocument] = useState();
       const UploadFile = async (DocumentPicker) => { 
         const pickDocument = async (DocumentPicker) => {
          console.log("Picker started...");
         console.log(DocumentPicker);
        console.log("picker running");
        try{
          // let result = await DocumentPicker.getDocumentAsync({});
            let result=await DocumentPicker.getDocumentAsync({});
          
        }
        catch(err) {
          console.log("Error is :",err);
        }
      
      console.log(result.uri);
      console.log(result);
      //Read the file's content as a string
     const fileContentUri = result.uri; // user requireid interface   
     const fileContentString = await FileSystem.readAsStringAsync(fileContentUri, {
        encoding: FileSystem.EncodingType.UTF8,
      });
       console.log(fileContentString);

     //Encrypt the file's content using AES encryption algorithm
      const encryptionKey = "Spidar Monkey "; // Replace with your desired encryption key
      const encryptedFileContent = CryptoJS.AES.encrypt(fileContentString, encryptionKey).toString();
      console.log(fileContentString);
             
      // Convert the encrypted file content to a Buffer
      const encryptedFileContentBuffer = Buffer.from(encryptedFileContent, "base64");

      // Store the encrypted file's content in the state variable
      setSelectedDocument(encryptedFileContentBuffer);
    };

     await pickDocument(DocumentPicker);
    console.log(selectedDocument);
   useEffect(async()=>{
   const data = await fetch("https://localhost:8000",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({encryptedFileContent: selectedDocument}),
  
   });
   const response = await data.json();
   if (response == "success") {  
    console.log("success");
   } else {
    console.log("failure");
   } 
   },[])

    //Send the encrypted file content to the server
    if (selectedDocument) {
      try {
        const response = await axios.post("https://qrcode-test-api.onrender.com/api/v1", {
          encryptedFileContent: selectedDocument,
        });

        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
   };

   return (
    <View style={styles.background}>

      <Text style={styles.file}>Upload CSV File</Text>
      <View style={styles.button}>
        <TouchableOpacity>
          <Button title="upload your file" color="black" onPress={()=>{UploadFile(DocumentPicker)}} />
        </TouchableOpacity>
      </View>
    </View>
  );
 };
 const styles = StyleSheet.create({
  background: {
    backgroundColor: "radial-gradient(ellipse at left bottom, rgb(163, 237, 255) 0%, rgba(57, 232, 255, 0.9) 59%, rgba(48, 223, 214, 0.9) 100% )",
  },
  file: {
    color: "black",
    marginHorizontal: 145,
  },

  button: {
    marginHorizontal: 60,
  },
 });

export default MyComponent;


// const App = () => {
//   const [fileResponse, setFileResponse] = useState([]);

//   const handleDocumentSelection = useCallback(async () => {
//     try {
//       const response = await DocumentPicker.pick({
//         presentationStyle: 'fullScreen',
//       });
//       setFileResponse(response);
//     } catch (err) {
//       console.warn(err);
//     }
//   }, []);

//   return (
//     <SafeAreaView style={styles.container} >
//       <StatusBar barStyle={'dark-content'} />
//       {fileResponse.map((file, index) => (
//         <Text
//           key={index.toString()}
//           style={styles.uri}
//           numberOfLines={1}
//           ellipsizeMode={'middle'}>
//           {file?.uri}
//         </Text>
//       ))}
//       <Button title="Select 📑" onPress={handleDocumentSelection} />
//     </SafeAreaView>
//   );
      
// } 
