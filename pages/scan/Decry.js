
// import { ImagePicker } from 'expo-image-picker';
// import * as MediaLibrary from 'expo-media-library';

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { Buffer } from 'buffer';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import {PDF} from 'react-native-pdf';

const MyComponent = () => {
    
  const [decryptedDocument, setDecryptedDocument] = useState();
    const [selectedDocument, setSelectedDocument] = useState();
  
  const decryptFile = async () => {
    if (selectedDocument && typeof selectedDocument === 'object' && 'uri' in selectedDocument) {

    const decryptionKey = 'Spidar Monkey '; // replace with your desired decryption key
    const decryptedFileContent =  await decryptedFileContent(selectedDocument, decryptionKey);
    setDecryptedDocument(decryptedFileContent);

    // // Save the decrypted file to the mobile device
    // const fileUri = FileSystem.downloadAsync + 'decryptedFile.csv';
    //   await FileSystem.writeAsStringAsync(fileUri, decryptedFileContent);

      // Save the decrypted file to the mobile gallery
    const asset = await MediaLibrary.createAssetAsync(fileUri);
    await MediaLibrary.createAlbumAsync('MyAlbum', asset, false);
  };
  }
}

  // return (
// <View style={styles.background}>
    //   <Text style={styles.file}>Upload CSV File</Text>
    //   <View style={styles.button}>
    //     <TouchableOpacity>
    //       <Button title="upload your file" color="black"  />
    //     </TouchableOpacity>
    //   </View>
  //     <View style={styles.button}>
  //       <TouchableOpacity>
  //         <Button title="decrypt file" color="black" onPress={decryptFile} />
  //       </TouchableOpacity>
  //     </View>
  //     // {decryptedDocument && <Text style={styles.file}>Decrypted File: {decryptedDocument}</Text>}
  //   // </View>
  // );
  

export default MyComponent;