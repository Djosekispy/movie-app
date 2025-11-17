import { StyleSheet } from "react-native";

 const textColor = "#FFF";
 const BackgroundApp = "#000000";
 const buttonColors = "#FF2D55";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : BackgroundApp
   },
   text : {
    color : textColor,
    fontSize : 14,
    marginBottom : 4
   },
   button : {
    backgroundColor : buttonColors,
    padding : 10,
    borderRadius : 5,
    margin : 10,
    width : 100
   },
   imageContainer : {
    width : 120,
    height : 120,
    marginVertical : 12
   },
   image : {
    width : "100%",
    height : "100%",
    resizeMode : "cover"
   },
   form : {
    width: "100%",
    paddingHorizontal : 12,
    marginVertical : 4,
    marginTop : 20,
    gap : 8
   },
   formItem : {
    paddingHorizontal: 4,
    marginBottom : 16,
    position : "relative",
   },
   input : {
    backgroundColor : textColor,
    borderRadius : 12,
    height : 40,
    width : "100%",
    paddingLeft : 18
   },
   icone : {
    position : "absolute",
    top : 32,
    right : 20
   }

})

export { styles };

