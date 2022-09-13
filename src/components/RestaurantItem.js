import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const localRestaurants = [
    {
        name: "Cafe Coffee Day",
        image_url: "https://www.dlfmallofindia.com/wp-content/uploads/2020/04/DSC07035.jpg",
        category: ["Cafe"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
    },
    {
        name: "Domino's Pizza",
        image_url: "https://www.insidermedia.com/uploads/news/resized/Dominos-Skipton-2867-1571826577.jpg",
        category: ["Restaurant"],
        price: "$$",
        reviews: 3897,
        rating: 4.8,
    },
    {
        name: "McDonald's",
        image_url: "https://www.eatthis.com/wp-content/uploads/sites/4/2020/10/mcdonalds-exterior.jpg?quality=82&strip=1",
        category: ["Restaurant"],
        price: "$$",
        reviews: 2840,
        rating: 4.7,
    },
]
export default function RestaurantItem() {

    const RestaurantImage = () => (
        <>
            <Image
                source={{
                    uri: "https://delhi6sweets.com.au/wp-content/uploads/2022/05/selection-of-indian-food.jpg"
                }}
                style={{ width: "100%", height: 180 }}
            />
            <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
                <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
            </TouchableOpacity>
        </>
    );

    const RestaurantInfo = () => (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
            }}
        >
            <View>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>FarmHouse Kitchen Thai Cuisine</Text>
                <Text style={{ fontSize: 13, color: 'gray' }}>30-45 · min</Text>
            </View>
            <View
                style={{
                    backgroundColor: "#eee",
                    height: 30,
                    width: 30,
                    alignItems: "center",
                    borderRadius: 15,
                    justifyContent: "center"
                }}>
                <Text>4.5</Text>
            </View>
        </View>
    )
    return (
        <TouchableOpacity activeOpacity={0.6} style={{marginBottom: 30}}>
            <View style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}>
                <RestaurantImage />
                <RestaurantInfo />
            </View>
        </TouchableOpacity>
    )
}