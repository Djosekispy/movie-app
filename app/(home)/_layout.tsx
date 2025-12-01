import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function HomeLayout(){

    return (
        <Tabs
        
        screenOptions={{
            headerShown : false,
            tabBarInactiveTintColor : "#fafafa",
            tabBarActiveTintColor : "#12CDD9",
            tabBarStyle : {
                backgroundColor : "#1F1D2B",
                borderTopWidth : 0,
                paddingVertical: 4
            },
            tabBarLabelStyle : {
                fontFamily : "iris-grover"
            }
        }}
        >
            {/* Página Principal */}
    <Tabs.Screen 
      name="index"
      options={{
        title : "Inicio",
        tabBarIcon : ({color,focused,size})=> <Feather name="home" size={size} color={focused ? "#12CDD9" : color} />
      }}
    />

  {/* Página de  Usuarios */}
     <Tabs.Screen 
   name="user"
    options={{
        title : "Usuários",
          tabBarIcon : ({color,focused,size})=> <Feather name="user" size={size} color={focused ? "#12CDD9" : color} />
    
      }}
    />
  {/* Página de definições */}
     <Tabs.Screen 
    name="settings"

     options={{
        title : "Definições",
          tabBarIcon : ({color,focused,size})=> <Feather name="settings" size={size} color={focused ? "#12CDD9" : color} />
    
      }}
    />

    </Tabs>
    )
}