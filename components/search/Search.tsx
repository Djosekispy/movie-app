import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";



export default function Search(){


    return (
        <View style={style.container}>
            <TextInput
            placeholderTextColor="#92929D"
             style={style.input} 
             placeholder="Search a title.."  />
            <TouchableOpacity style={style.searchButton}>
<Ionicons name="search" size={25} color="#92929D"/>
            </TouchableOpacity>
            
              <TouchableOpacity style={style.FilterButton}>
 <Ionicons name="filter" size={25} color="#92929D"/>
            </TouchableOpacity>
            
        </View>

    );

}



const style = StyleSheet.create({
  container:{
    width: "100%",
    height: 50,
    borderRadius: 20,
    overflow:"hidden",
    position: "relative",
    marginVertical: 6
  },
  input:{
  width: "100%",
  height:"100%",
  paddingLeft: 50,
  backgroundColor:"#252836",
  color: "#fff"
  },
  searchButton:{
    position: "absolute",
    top: 12,
    left: 12
  },
    FilterButton:{
    position: "absolute",
    top: 12,
    right: 12
  }
});