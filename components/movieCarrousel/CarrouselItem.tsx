import { Image, StyleSheet, Text, View } from "react-native";
import { IMovie } from "./data/mock-movie";



export default function CarrouselItem({data,image,title}:IMovie){

    return(
        <View style={style.container}>
            <Image source={image} style={style.image}  />
            <Text style={style.title}>{title}</Text>
             <Text style={style.text}>{data}</Text>
        </View>
    );
}

const style = StyleSheet.create({
  container:{
    height: 180,
    width: 300,
    borderRadius: 16,
    overflow: "hidden",
    position:"relative",
    justifyContent:"center",
    alignItems:"flex-start",
    marginLeft: 8,
    marginTop: 20
  },
  text:{
    color:"#EBEBEF",
    fontWeight:"light",
    position: "absolute",
    bottom: 12,
     paddingLeft: 12
  },
   title:{
    color:"#FFFFFF",
    fontWeight:"bold",
    position: "absolute",
    paddingLeft: 12,
    bottom: 30,
    fontSize: 18
  },
  image:{
    width:"100%",
    height:"100%",
    resizeMode:"cover"
  }
});