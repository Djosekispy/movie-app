import { Text, View } from "react-native";



export default function Settings(){

    return (
        <View
        style={{
            flex : 1,
            justifyContent : "center",
            alignItems : "center",
            backgroundColor : "#1F1D2B"
        }}
        >
            <Text style={{color : "#fff"}}>Definições</Text>
        </View>
    )
}