import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  
  const info = {
    'name ': 'James Bond',
    'role': 'Detective'
  }
  const SendQR = (info) => {
    console.log(info)
    navigation.navigate('Member Profile',{...info})
  }

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    SendQR(data)
    //alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{
      flex: 1
    }}>
      
    <View
      style={{
        flex: 1.3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
     
    </View>
    <View style={{
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         flex: 0.1,
         borderTopWidth: 1,
         borderTopColor: 'grey'
      }}>
                <Text>Want to share your contact?</Text>
                <View>
                    <TouchableOpacity style={{
                       width: 105,
                       height: 30,
                       borderColor: 'red',
                       borderWidth: 1,
                       justifyContent: 'center',
                       alignItems: 'center',
                       marginHorizontal: 10
                       
                    }}
                         onPress={() => navigation.navigate('Camera')}>
                        <Text> Send QR</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </View>

  );
}
