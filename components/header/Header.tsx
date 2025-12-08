import Entypo from '@expo/vector-icons/Entypo';
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from './style';


interface Props {
    name : string;
    message : string;
    avatar : any;
    favorite? : boolean;
    setFavorite : (favorite : boolean) => void;
}



export default function Header({ avatar,message,name, favorite,setFavorite } : Props){

    return (
 <View style={styles.container}>
    <View style={styles.Imagecontainer}>
        <Image source={avatar} style={styles.Image} />
    </View>
    <View style={styles.Usercontainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.welcome}>{message}</Text>
    </View>
    <TouchableOpacity onPress={()=> setFavorite(!favorite)} >
    <Entypo name="heart" size={24} color={favorite ? "#FB4141"  : "#92929D"} />
    </TouchableOpacity>
 </View>

    );
}


