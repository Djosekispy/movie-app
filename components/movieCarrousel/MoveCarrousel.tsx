
import { FlatList, View } from "react-native";
import CarrouselItem from "./CarrouselItem";
import { MovieData } from "./data/mock-movie";


const wakanda = require("@/assets/images/wakanda.jpg")

function MovieCarousel(){

    return (
         <View style={{flex:1, width:"100%"}}>
            <FlatList
            horizontal
            data={MovieData}
            renderItem={({item,index})=><CarrouselItem 
            data={item.data}
             image={wakanda}
              title={item.title}
              key={index}
              />}


            />

        </View>
    );
}



export default  MovieCarousel;