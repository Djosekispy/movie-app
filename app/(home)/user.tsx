import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function UserPage(){

    return (
     <View
     style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor : "#1F1D2B"
     }}
     >
            <Link href="/(auth)/register" asChild>
            <TouchableOpacity>
            <Text style={{color : "#FFF"}}>User Page</Text>

            </TouchableOpacity>
            </Link>
     </View>   
    );
}