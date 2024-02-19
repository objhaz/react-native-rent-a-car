import React, { useState } from "react";
import { Dimensions, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width

const menu = require("./assets/icons/menu.png");
const face = require("./assets/face.png");
const magnifying_glass = require("./assets/icons/magnifying-glass.png");

const image_v_1 = require("./assets/vehicles/v-1.png");
const image_v_2 = require("./assets/vehicles/v-2.png");
const image_v_3 = require("./assets/vehicles/v-3.png");
const image_v_4 = require("./assets/vehicles/v-4.png");

import data from "./dataset/vehicles.json";

const HomeScreen = ({ navigation }) => {
    const [vehicles, setVehicles] = useState(data.vehicles);
    const [filteredVehicles, setFilteredVehicles] = useState(data.vehicles);

    const searchVehicles = (keyword) => {

      const lowercaseKeyword = keyword.toLowerCase();
      const results = vehicles.filter(vehicles =>{
        return vehicles.make.toLowerCase().includes(lowercaseKeyword)
      })

      setFilteredVehicles(results);
    }

  const getImage = (id) => {
    if(id == 1) return image_v_1;
    if(id == 2) return image_v_2;
    if(id == 3) return image_v_3;
    if(id == 4) return image_v_4;
  }


  return (
    
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.headerSection}>
          <Image source={menu} resizeMode="contain" style={styles.menuIconStyle}/>
          <Image source={face} resizeMode="contain" style={styles.faceIconStyle}/>
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.title}>Rent a Car</Text>
        </View>
        <View style={styles.searchSection}>
          <View style={styles.searchPallet}>
            <TextInput
            placeholder="Search a Car"
            style={styles.searchInput}
            onChangeText={(text) => searchVehicles(text)}
            />
          
          <View style={styles.searchIconArea}>
          <Image source={magnifying_glass} resizeMode="contain" style={styles.manifyingglassStyle}/>
          </View>
        </View>
        </View>
        <View style={styles.typesSection}>
          <Text style={styles.typesTextActive}>All</Text>
          <Text style={styles.typeText}>Suv</Text>
          <Text style={styles.typeText}>Sedan</Text>
          <Text style={styles.typeText}>Mpv</Text>
          <Text style={styles.typeText}>Hatchback</Text> 
        </View>
        <View style={styles.listSection}>
          <Text style={styles.headText}>Most Rented</Text>


          <ScrollView style={styles.elementPallet}>

            {
              filteredVehicles.map(vehicle => {
                return(
                  <TouchableOpacity style={styles.element} key={vehicle.id} activeOpacity={0.9} 
                  onPress={()=> navigation.navigate('Info',{id: vehicle.id})}>
                  <View style={styles.infoArea}>
                    <Text style={styles.infoTitle}>{vehicle.make} {vehicle.model}</Text>
                    <Text style={styles.infoSub}>{vehicle.type}-{vehicle.transmission}</Text>
                    <Text style={styles.infoPrice}>
                    <Text style={styles.infoAmount}>${vehicle.price_per_day}</Text> /day
                    </Text>
                    
                  </View >
                  <View style={styles.imageArea}>
                    <Image source={getImage(vehicle.id)} resizeMode="contain" style={styles.vehicleImage}/>
                  </View>
                  </TouchableOpacity>
                )
              })
            }



           
            
            </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e7e7e7",
  },
  container:{
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35
  },
  headerSection:{
    height: height*0.14,
    justifyContent: "space-between",
    flexDirection:"row",
    alignItems:"center"
  },
  menuIconStyle:{
    width: width*0.07
  },
  faceIconStyle:{
    width: width*0.088
  },
  titleSection:{
    marginTop: 15,
  },
  title:{
    fontSize: 32,
    fontWeight: "600",
  },
  searchSection:{
    marginTop: 15,
paddingLeft: 15,
paddingRight: 15,
justifyContent: "center"
  },
  searchPallet:{
    paddingLeft: 10,
    paddingRight:10,
    flexDirection:"row",
    borderRadius: 8,
    height: height*.037,
    width: '100%',
    backgroundColor: 'white',
  },
  searchInput:{
    width: width*.64,
    height: height*0.035,
  },
  searchIconArea:{
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  manifyingglassStyle:{
    height:height*0.027,
    marginRight: -10
  },
  typesSection:{
    marginTop: 15,
    flexDirection: 'row',
  },
  typesTextActive:{
    fontSize: 16,
    marginRight: 34,
    fontWeight: 'bold',
    color: 'black'
  },
  typeText:{
    fontSize: 15,
    fontWeight: '500',
    marginRight: 34,
    color: '#696969'
  },
  listSection:{
    marginTop: 15,

  },
  headText:{
    fontSize:16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  elementPallet:{
    marginLeft: -15,
    paddingLeft: 15,
    paddingRight: 15,
    width: '110%',
    height: height*0.6,
  },
  element:{
    padding: 10,
    height: height*0.12,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: 'row',
    marginBottom: 13
  },
  infoArea:{
    flex:1
  },
  infoTitle:{
    fontSize: 16,
    fontWeight: 'bold'
  },
  infoSub:{
    fontSize: 12,
    fontWeight: '600',
    color: '#696969'
  },
  infoPrice:{
    position: 'absolute',
    bottom:0,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#696969'
  },
  imageArea:{
    flex: 1,
  },
  infoAmount:{
    fontSize: 12,
    color: 'black',
    fontWeight: '600'
  },
  vehicleImage:{
    position: "absolute",
    top: -15,
    bottom: -10,
    width: '120%',
    height:'120%'
  }
});
