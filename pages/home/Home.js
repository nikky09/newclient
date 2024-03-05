import React, { createContext, useEffect, useState } from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Rect } from 'react-native-svg';
import QRCode from "react-native-qrcode-svg";
// import { CameraView, Camera } from "expo-camera/next";
 import axios from "../../axios"; 

 const data1= createContext();
 const data2= createContext();
  let some;
    const Home = (navi) => {
    const navigation = useNavigation();
    const [button1, setButton1] = useState();
    const [button2, setButton2] = useState();
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);


//   function getRandomNumber() {
//     return Math.floor(Math.random()*(255)); // Generates a random number between 0 and 255
//   }
//  function getRandomAsciiCharacter() {
//     const randomNum = getRandomNumber();
//     return String.fromCharCode(randomNum);
//  } 
//  function generateRandomString() {
//     let randomString = '';  
//     for (let i=0; i<32; i++) {
//     randomString += getRandomAsciiCharacter();
//     }
//     return randomString;
// } 


const generateRandomString = () => {
    let output = '';
    for (let i = 0; i < 32; i++) {
      const randNum = Math.floor(Math.random() * 255);
      const asciiChar = String.fromCharCode(randNum);
      output += asciiChar;
    }
    return output;
  };
  
    const handleRedirect1 = () => {
        let some = generateRandomString();
        navigation.navigate("Scan",{some});
        // 
        
        // alert(some)
        // console.log(some);
      }; 

    const handleRedirect2 = async () => {     
        const some = generateRandomString();
        navigation.navigate("Sca",{some});
       const rowData=  await fetch("http://10.10.159.16:8000/api/v1/auth/sca",{
            method:"POST",
            body:JSON.stringify({some:some}),
            some:some,
            
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            
        });

        //     .then((response)=> response.json())
        //     .then((some)=>{
        //         console.log(some);
            
        // })
    
        const complete = await rowData.text( );
        console.log(`this is the data ${complete}`);
        console.log("hello")
    
    };
//      console.log(data1)
//           console.log(data2)


//     const [fetched,setFetched] = useState();
// //   const some = ["nikky"]
//   const data = async () => {
//     try {
//       const row = await fetch("http://192.168.137.1:8000/sca", {
//         method: "POST",
//         body: some,
//         headers: {
//           "Content-Type": "application/json"
//         }
//       })
//       const getData = await row.text()
//       setFetched(getData)
//       console.log(row)
//     } catch (error) {
//       console.log(error)
//     }
//     }


    const handleRedirect3 = () => {
    navigation.navigate("Cam");    
        
    }
 
    const handleRedirect4 = () => {
     navigation.navigate("Pikerr");         
    }

          
    // const handleRedirect5 = () => {
    //     navigation.navigate("Decry");         
    //    }
          
    const screenWidth = Dimensions.get("window").width;
    return (
        <data1.Provider value={button1}>
            <data2.Provider value={button2}>
                
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Svg width={200} height={200}>
                    <Rect x="0" y="0" width="200" height="200" fill="white" />
                </Svg>

                <TouchableOpacity style={styles.btn} onPress={handleRedirect1}>
                      
                    <Text style={styles.text}>Button one</Text>
                    {/* < Scan data={first} /> */}
                   <Text> {button1}</Text>
                </TouchableOpacity>

               
                <TouchableOpacity style={styles.btn} onPress={handleRedirect2}>

                    <Text style={styles.text}>Button two</Text>
                </TouchableOpacity>
             
                <TouchableOpacity style={styles.btn}  onPress={handleRedirect3}> 

                    <Text style={styles.text}>Button three</Text>
                </TouchableOpacity>


                <TouchableOpacity style={styles.btn} onPress={handleRedirect4}>
                    <Text style={styles.text}>Button four</Text>
                </TouchableOpacity>


                {/* <TouchableOpacity style={styles.btn}> onPress ={handleRedirect5}
                    <Text style={styles.text}>Button five</Text>
                </TouchableOpacity> */}


            </View>
        </ScrollView>
        </data2.Provider>
        </data1.Provider>
    );
};

export default Home;
export {data1,data2}
// export {data1 , data2};


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