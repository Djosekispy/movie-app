import Header from "@/components/header/Header";
import { View } from "react-native";


export default function HomePage(){

    return (
     <View
     style={{
        flex: 1,
        alignItems: "center",
        backgroundColor : "#1F1D2B"
     }}
     >
        <Header />
     </View>   
    );
}