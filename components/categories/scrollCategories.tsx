import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { categories, categoriesEnum } from "./data/mockCategories";



export default function ScrollCategories(){
   const [tab, setTab ] = useState<categoriesEnum>(categoriesEnum.ALL)
   
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            >
                <TouchableOpacity onPress={()=>setTab(categoriesEnum.ALL)} style={[styles.button,{ backgroundColor: tab == categoriesEnum.ALL ? "#252836":"transparent"}]}>
                        <Text style={[styles.text,{color: tab == categoriesEnum.ALL ? "#12CDD9":"#fff" }]}>{categories[0].label}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setTab(categoriesEnum.ANIMATION)} style={[styles.button,{ backgroundColor: tab == categoriesEnum.ANIMATION ? "#252836":"transparent"}]}>
                       <Text style={[styles.text,{color: tab == categoriesEnum.ANIMATION ? "#12CDD9":"#fff" }]}>{categories[1].label}</Text>
                    </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setTab(categoriesEnum.COMEDY)} style={[styles.button,{ backgroundColor: tab == categoriesEnum.COMEDY ? "#252836":"transparent"}]}>
                        <Text style={[styles.text,{color: tab == categoriesEnum.COMEDY ? "#12CDD9":"#fff" }]}>{categories[2].label}</Text>
                    </TouchableOpacity>
                            <TouchableOpacity onPress={()=>setTab(categoriesEnum.DOCUMENTARY)} style={[styles.button,{ backgroundColor: tab == categoriesEnum.DOCUMENTARY ? "#252836":"transparent"}]}>
                        <Text style={[styles.text,{color: tab == categoriesEnum.DOCUMENTARY ? "#12CDD9":"#fff" }]}>{categories[3].label}</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        width:"100%",
        justifyContent: "flex-start",
        alignItems:"flex-start"
    },
    title: {
  fontSize: 20,
  color:"#fff",
  fontWeight: "bold"
    },
    containerView:{
     marginVertical: 12
    },
    button:{
        borderRadius: 12,
        height: 40,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        marginLeft: 6,
        marginTop: 12
    },
    text: {
   fontSize: 14
    }
})