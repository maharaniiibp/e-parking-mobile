import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign icon

export default function TikettanyaScreen() {
  const navigation = useNavigation();

  const navigateToTiketmasukScreen = () => {
    navigation.navigate("TiketmasukScreen");
  };

  const navigateToTiketkeluarScreen = () => {
    navigation.navigate("TiketkeluarScreen");
  };

  const navigateToScannerScreen = () => {
    navigation.navigate("ScannerScreen");
  };

  return (
    <>
      {/* section 1 */}
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToScannerScreen}>
          <View style={styles.left}>
            <AntDesign name="left" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textscan}>Tambah Tiket Manual</Text>
        </View>
      </View>

      {/* section 2 */}
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={navigateToTiketmasukScreen}>
          <Image source={require("../../assets/scan/tiketmasuk.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToTiketkeluarScreen}>
          <Image source={require("../../assets/scan/tiketkeluar.png")} />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // section 1
  container: {
    padding: 20,
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  textscan: {
    fontWeight: "bold",
    fontSize: 23,
    marginLeft: 70,
  },
  left: {
    marginRight: 10,
  },

  // section 2
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
