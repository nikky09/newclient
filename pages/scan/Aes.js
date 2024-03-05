// import React, { useState } from 'react';
// import { View, Button, Alert } from 'react-native';
// import CryptoJS from 'crypto-js';
// import key from '../../secretkey';

// // const EncryptScreen = () => {
// //   const [encryptedText, setEncryptedText] = useState('');

// //   const handleEncrypt = async () => {
// //     try {
// //       // Your 256-bit key (32 bytes)
// //       const key = 'spidermonkey';
      
// //       // Read text from file (this is a placeholder)
// //       const textFromFile = 'This is the text from the file you read';

// //       // Encrypt text using AES encryption
// //       const encrypted = CryptoJS.AES.encrypt(textFromFile, key).toString();

// //       setEncryptedText(encrypted);
// //     } catch (error) {
// //       console.error('Encryption error:', error);
// //       Alert.alert('Error', 'Failed to encrypt text');
// //     }
// //   };

// //   return (
// //     <View>
// //       <Button title="Encrypt Text" onPress={handleEncrypt} />
// //       <Text>Encrypted Text: {encryptedText}</Text>
// //     </View>
// //   );
// // };

// const Encrypt = word =>{
//   return  CryptoJS.AES.encrypt(word, key).toString();
// };

// const Decrypt = word=> {
//   return  CryptoJS.AES.decrypt(word, key).toString(Crypto.enc.utf8);
 

// };
// export default {Encrypt ,Decrypt};

// // export default EncryptScreen;
