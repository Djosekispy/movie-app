import { styles } from "@/styles/homestyle";
import Entypo from '@expo/vector-icons/Entypo';
import { Image, Text, TextInput, View } from "react-native";

const loginImage = require("../../assets/images/Profile.png");
export default function TabOneScreen() {
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
    <TextInput style={styles.input} placeholder="Digite seu email" />
  </View>

    <View style={styles.formItem}>
    <Text style={styles.text}>Senha</Text>
    <TextInput secureTextEntry={false} style={styles.input} placeholder="Digite sua Senha" />
    <Entypo style={styles.icone} name="eye" size={24} color="black" />
  </View>
</View>


   </View>
  );
}


