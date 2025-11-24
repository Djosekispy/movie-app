import { StyleSheet } from "react-native";

 const textColor = "#FFF";
 const BackgroundApp = "#000000";
 const buttonColors = "#FF2D55";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor : BackgroundApp,
    paddingHorizontal : 12
   },
   text : {
    color : textColor,
    fontSize : 14,
    marginBottom : 4,
    fontFamily : 'iris-grover'
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
  
   },
   image : {
    width : "100%",
    height : "100%",
    resizeMode : "cover"
   },
   form : {
    width: "100%",
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
   },
   loginButton : {
    width : 180,
    height: 30,
    backgroundColor : "#FF2D55",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop : 60
   },
   enterWithContainer : {
    flexDirection : "row",
    gap : 4,
    alignItems : "center",
    marginTop : 20
   },
   linesEnterWith : {
    width: 36,
    height: 7,
    backgroundColor : textColor,
   },
   socialMediaLoginContainer : {
    flexDirection : "row",
    alignItems : "center",
    gap: 6,
    marginTop: 12
   },
   socialButton : {
    height : 40,
    width : 40,
   },
   socialImageButton : {
    width : "100%",
    height : "100%",
    resizeMode : "cover"  
   },
   createAccountContainer : {
    flexDirection : "row",
    marginTop : 40,
   }


})

export { styles };

