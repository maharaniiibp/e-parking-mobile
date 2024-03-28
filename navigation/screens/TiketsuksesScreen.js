import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TikesuksesScreen() {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.body}>
      {/* section 1 */}
      <View style={styles.container}>
        <Text style={styles.textscan}>Scan Tiket</Text>
      </View>
      <View style={styles.bottom}></View>

      {/* section 2 */}
      <View style={styles.verif}>
        <Image source={require("../../assets/scan/verif.png")} />
        <Text style={styles.textdata}>Data tiket telah berhasil disimpan</Text>
      </View>

      {/* section 3 */}
      <View style={styles.pkrm}>
        <View style={styles.kirim}>
          <TouchableOpacity onPress={navigateToHome}>
            <View>
              <Text style={styles.textkirim}>KEMBALI KE BERANDA</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#269544",
  },
  // section 1
  container: {
    padding: 20,
    paddingTop: 50,
    alignSelf: "center",
    alignItems: "flex-start",
  },
  textscan: {
    fontWeight: "bold",
    fontSize: 23,
  },
  bottom: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  // section 2
  verif: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 240,
  },
  textdata: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 18,
    color: "white",
  },
  // section 3
  kirim: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 18,
  },
  textkirim: {
    color: "#269544",
    fontSize: 17,
    fontWeight: "bold",
    alignSelf: "center",
  },
  pkrm: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 280,
    display: "flex",
  },
});
