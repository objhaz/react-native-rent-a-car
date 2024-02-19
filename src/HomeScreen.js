import React, { useState } from "react";
import { ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

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

        </View>
        <View style={styles.searchSection}>

        </View>
        <View style={styles.typesSection}>

        </View>
        <View style={styles.listSection}>

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
    backgroundColor: 'red',
    justifyContent: "space-between",
    flexDirection:"row",
    alignItems:"center"
  },
  menuIconStyle:{
    width: 30
  },
  faceIconStyle:{
    width: 40
  }
});
