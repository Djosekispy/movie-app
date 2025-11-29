import { styles } from "@/styles/homestyle";
import Entypo from '@expo/vector-icons/Entypo';
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const loginImage = require("../../assets/images/Profile.png");
const facebookImage = require("../../assets/images/Facebook.png");
const googleImage = require("../../assets/images/Google.png");
const instaImage = require("../../assets/images/Instagram.png");


export default function TabOneScreen() {

  const [secure, setSecure] = useState<boolean>(true);
  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const router = useRouter()

const onSubmit = () => {
  router.push("/(home)");
}

  return (
   <View
   style={styles.container}
   >
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
    > Seja Bem vindo</Text>

<View style={styles.form}>
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
<View style={{
  width: '100%',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
}}>
  <Text
  style={styles.text}
  > Esqueceu a senha ? </Text>
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

    <View style={styles.createAccountContainer}>
   <Link href="/(auth)/register" asChild>
     <TouchableOpacity>
         <Text style={styles.text}>Crie sua conta</Text>
     </TouchableOpacity>
   </Link>
    </View>
   </View>
  );
}


