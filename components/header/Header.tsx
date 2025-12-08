import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './style';

const avatar = require("@/assets/images/avatar.jpg");

export default function Header(){
    const [ favorite, setFavorite ] =  useState<boolean>(false);

    return (
 <View style={styles.container}>
    <View style={styles.Imagecontainer}>
        <Image source={avatar} style={styles.Image} />
    </View>
    <View style={styles.Usercontainer}>
        <Text style={styles.name}>Osvaldo Victor</Text>
        <Text style={styles.welcome}>Seja bem vindo. Desfrute de tudo de melhor!</Text>
    </View>
    <TouchableOpacity onPress={()=> setFavorite(!favorite)} >
    <Entypo name="heart" size={24} color={favorite ? "#FB4141"  : "#92929D"} />
    </TouchableOpacity>
 </View>

    );
}


