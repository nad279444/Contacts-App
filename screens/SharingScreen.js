
import React from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import {QRCode} from 'react-native-custom-qr-codes-expo'



export default function SharingScreen ({navigation}){
    
    return(
        <View style={styles.container}>
           <View style={styles.infoContainer} >
               <Text>Exchange Contact Information</Text>
               <Text> Scan this QR below to share this contacts</Text>
            </View> 
            <View style={styles.QRCode}>
                <QRCode content="nad" codeStyle='square'/>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/img3.jpg')} style={styles.image}/>
                <View style={styles.Text}>
                    <Text>John Shay</Text>
                    <Text style={styles.marketing}> Head of Marketing</Text>
                </View>
            </View>
            <View style={styles.scanContainer}>
                <Text>Want to add a new Connection?</Text>
                <View>
                    <TouchableOpacity style={styles.scanBox}
                         onPress={() => navigation.navigate('Camera')}>
                        <Text> Scan QRCode </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    infoContainer: {
        justifyContent:'center',
        alignItems: 'center',
        flex: 0.2
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 50,
        flex: 0.1
    
        
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 35,
    
    },
    QRCode: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.6
    },
    scanContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1,
        borderTopWidth: 1,
        borderTopColor: 'grey'
    },
    Text: {
        justifyContent: 'flex-start',
        paddingHorizontal: 5
    
    },
    marketing: {
        color: 'grey'
    },
    scanBox: {
        width: 105,
        height: 30,
        borderColor: 'red',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
        
    }
  
})