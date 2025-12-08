import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container :{
        flexDirection : "row",
        justifyContent : "flex-start",
        alignItems: "center",
        flexShrink : 1,
        paddingVertical: 12,
        paddingHorizontal: 20   
     },
    Imagecontainer : {
        width: 50,
        height: 50,
        borderRadius: 25,
        overflow: "hidden"
    },
    Usercontainer :{
        flexDirection: "column",
        gap: 4,
        paddingHorizontal: 14
    },
    name : {
        color: "#fff",
        fontSize : 18,
        fontWeight : "bold"
    },
    welcome : {
        color: "#92929D",
        fontSize : 12
    },
    Image : {
    width : "100%",
    height : "100%",
    resizeMode : "cover"
    }

});

export default styles;