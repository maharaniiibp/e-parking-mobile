import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CameraScreen from "./CameraScreen";

const ScannerScreen = () => {
  const navigation = useNavigation();

  const goToNextPage = () => {
    navigation.navigate("TikettanyaScreen");
  };
  const goToScantiketmasuk = () => {
    navigation.navigate("ScantiketmasukScreen");
  };

  return (
    <>
      {/* SCAN TIKET MASUK */}
      {/* section 1 */}
      <View style={styles.container}>
        <View style={styles.left}>
          <AntDesign name="left" size={24} color="black" />
        </View>
        <View>
          <Text style={styles.textscan}>Scan Tiket</Text>
        </View>
      </View>

      {/* section 2 soon */}
      <View style={{ flex: 1 }}>
      <CameraScreen navigation={navigation} />
      <View style={styles.scan}>
        <TouchableOpacity onPress={goToScantiketmasuk}>
          <Image source={require("../../assets/scan/scanner.png")} />
        </TouchableOpacity>
      </View>
    </View>

      {/* section 3 */}
      <View style={styles.tiga}>
        <View style={styles.bg}>
          <View style={styles.add}>
            <Ionicons name="add-circle-outline" size={24} color="white" />
          </View>
          <TouchableOpacity onPress={goToNextPage}>
            <Text style={styles.textmanual}>Tambah Manual</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  // section 1
  container: {
    padding: 20,
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    
  },
  textscan: {
    fontWeight: "bold",
    fontSize: 23,
    marginLeft: 118,
  },

  // img scan
  scan: {
    position: "absolute",
    alignSelf: "center",
    top: 180,
  },

  // section 2
  tiga: {
    position: "absolute",
    padding: 18,
    paddingTop: 700,
    alignSelf: "center",
  },
  bg: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#269544",
    borderRadius: 25,
    padding: 18,
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    paddingHorizontal: 60, // Padding inside the component to extend the border
  },
  textmanual: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    paddingLeft: 8,
  },
  add: {
    paddingTop: 5,
    paddingRight: 8, // Adjust padding as needed
  },
});

export default ScannerScreen;
