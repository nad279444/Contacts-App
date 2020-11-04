import React from 'react'
import {View,StyleSheet,Image,Text} from 'react-native'
import { Entypo,Fontisto ,Feather,EvilIcons} from '@expo/vector-icons';


export default function Member({route}){
    const{name,role}= route.params
   return(
       <View>
           <View>
                <Image source={require('../assets/img3.jpg')} style={styles.image}/>
                <Text> {name}</Text>
                <Text> {role} </Text> 
           </View>
           <View>
              <Entypo name="twitter-with-circle" size={24} color="black" />
              <Entypo name="linkedin-with-circle" size={24} color="black" />
           </View>
           <View>
               <View>
                   <Feather name="phone" size={24} color="black" />
                   <Text >+233 (244) 234 1234</Text>
               </View>
               <View>
                   <Fontisto name="email" size={24} color="black" />
                   <Text> Zak@codetrain.co</Text>
               </View>
               <View>
                   <EvilIcons name="location" size={24} color="black" />
                   <Text> Shoriditch,Uk</Text>
               </View>
           </View>
          
       </View>
   )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50
    }
})