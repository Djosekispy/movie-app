import ScrollCategories from "@/components/categories/scrollCategories";
import Header from "@/components/header/Header";
import MovieCarousel from "@/components/movieCarrousel/MoveCarrousel";
import Search from "@/components/search/Search";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

const avatar = require("@/assets/images/avatar.jpg");

export default function HomePage(){
  const [ favorite, setFavorite ] =  useState<boolean>(false);
  const { name, email } = useLocalSearchParams<{name : string, email : string}>()


    return (
     <View
     style={{
        flex: 1,
        alignItems: "center",
        backgroundColor : "#1F1D2B",
         paddingHorizontal: 20 ,
         paddingTop: 20  
     }}
     >
    <View style={{width:"100%",height:"auto"}}>
          <Header 
        name={name || "Desconhecido"}
        message="Seja bem Vindo. Desfrute de tudo de melhor!"
        favorite={favorite}
         setFavorite={setFavorite}
      avatar={avatar}
        />

        <Search /> 
    </View>
     
           <MovieCarousel />
           <ScrollCategories />
          
     </View>   
    );
}