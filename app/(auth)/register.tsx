import { BackgroundApp, styles } from "@/styles/homestyle";
import { Ionicons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const loginImage = require("../../assets/images/Profile.png");
const facebookImage = require("../../assets/images/Facebook.png");
const googleImage = require("../../assets/images/Google.png");
const instaImage = require("../../assets/images/Instagram.png");


export default function TabOneScreen() {

  const [secure, setSecure] = useState<boolean>(true);
  const [ email, setEmail ] = useState<string>('');
   const [ name, setName ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const router = useRouter()

const onSubmit = () => {
   router.push({pathname : "/(home)", params: { name: name, email : email }})
}

const goBack = ()=> {
    router.back();
}

  return (
   <ScrollView
   showsVerticalScrollIndicator={false}
   style={{flex : 1,
    backgroundColor : BackgroundApp}}
   >
    <View style={styles.container}>

    <View style={{width: "100%", alignItems : "flex-start", justifyContent: "flex-start", paddingTop: 16}}>
      <TouchableOpacity>
          <Ionicons onPress={goBack} name="arrow-back" size={24} color={"#fff"} />
      </TouchableOpacity>
    </View>
    <View
    style={[styles.imageContainer,{ marginBottom : 20}]}
    >
      <Image 
      style={styles.image}
      source={loginImage}
      
      />
    </View>
    <Text
    style={styles.text}
    > Faça seu Cadastro</Text>

<View style={styles.form}>
      <View style={styles.formItem}>
    <Text style={styles.text}>Nome Completo</Text>
    <TextInput onChangeText={(text)=>setName(text)} style={styles.input} placeholder="Digite seu nome" />
  </View>

  <View style={styles.formItem}>
    <Text style={styles.text}>Email</Text>
    <TextInput onChangeText={(text)=>setEmail(text)} style={styles.input} placeholder="Digite seu email" />
  </View>

    <View style={styles.formItem}>
    <Text style={styles.text}>Senha</Text>
    <TextInput  onChangeText={(text)=>setPassword(text)}  secureTextEntry={secure} style={styles.input} placeholder="Digite sua Senha" />
    {
      secure ? <Entypo onPress={()=> setSecure(!secure)} style={styles.icone} name="eye" size={24} color="black" />
  :   <Entypo onPress={()=> setSecure(!secure)} style={styles.icone} name="eye-with-line" size={24} color="black" />
  
    }
     </View>
</View>

 <TouchableOpacity onPress={onSubmit} style={styles.loginButton}>
  <Text style={[styles.text,{marginBottom: 0}]}>Entrar</Text>
 </TouchableOpacity>

 <View style={styles.enterWithContainer}>
  <View style={styles.linesEnterWith}></View>
  <Text style={styles.text}> Entrar Com </Text>
   <View style={styles.linesEnterWith}></View>
 </View>
  
  <View style={styles.socialMediaLoginContainer}>
     <TouchableOpacity style={styles.socialButton} >
      <Image source={facebookImage} style={styles.socialImageButton} />
 </TouchableOpacity>
 <TouchableOpacity style={styles.socialButton}  >
      <Image source={googleImage}  style={styles.socialImageButton} />
 </TouchableOpacity>
  <TouchableOpacity style={styles.socialButton} >
      <Image source={instaImage}  style={styles.socialImageButton}/>
 </TouchableOpacity>
  </View>

    </View>
   </ScrollView>
  );
}


