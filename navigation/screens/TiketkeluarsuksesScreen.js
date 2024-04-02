import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function TiketkeluarsuksesScreen() {
  const navigation = useNavigation();

  const navigateToTiketkeluar = () => {
    navigation.navigate("TiketkeluarScreen");
  };

  const navigateToTiketsukses = () => {
    navigation.navigate("TiketsuksesScreen");
  };
  const navigateToTidaksesuai = () => {
    navigation.navigate("TidaksesuaiScreen");
  };

  return (
    <>
{/* SCAN TIKET KELUAR SUKSES */}

      {/* section 1 */}
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToTiketkeluar}>
          <View style={styles.left}>
            <AntDesign name="left" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textscan}>Tambah Tiket Manual</Text>
        </View>
      </View>

      {/* section 2 */}
      <Text style={styles.event}>Event</Text>
      <View style={styles.pven}>
        <View style={styles.containerjam}>
          <View>
            <Text style={styles.textevent}>Gathering</Text>
          </View>
          {/* <View>
            <AntDesign name="down" size={24} color="#E6E6E6" />
          </View> */}
        </View>
      </View>

      {/* section 3 */}
      <Text style={styles.event}>Jam Pelaksanaan</Text>
      <View style={styles.pven}>
        <View style={styles.containerjam}>
          <View>
            <Text style={styles.textevent}>20.00 WIB</Text>
          </View>
          <View>
            <AntDesign name="clockcircleo" size={24} color="#E6E6E6" />
          </View>
        </View>
      </View>

      {/* section 4 */}
      <Text style={styles.event}>Jam Masuk</Text>
      <View style={styles.pven}>
        <View style={styles.containerjam}>
          <View>
            <Text style={styles.textevent}>20.10 WIB</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="alarm-plus"
              size={24}
              color="#E6E6E6"
            />
          </View>
        </View>
      </View>

      {/* section 5 */}
      <Text style={styles.event}>Nomor Polisi</Text>
      <View style={styles.pven}>
        <View style={styles.containerjam}>
          <View>
            <Text style={styles.textevent}>N 2019 NN</Text>
          </View>
        </View>
      </View>

      {/* section 6 */}
      <Text style={styles.event}>Foto Kendaraan dan Pengendara</Text>
      <View style={styles.foto}>
        <View style={styles.containfoto}>
          <View style={styles.ambil1}>
          <Image source={require("../../assets/scan/motor1.png")} />
          </View>
          <View style={styles.ambil1}>
          <Image source={require("../../assets/scan/motor2.png")} />
          </View>
        </View>
      </View>

      {/* section 7 */}
      <View style={styles.pkrm}>
        <View style={styles.kirim}>
          <TouchableOpacity onPress={navigateToTiketsukses}>
            <View>
              <Text style={styles.textkirim}>Kirim</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

        {/* section 8 */}
        <View style={styles.pkrm}>
        <View style={styles.tidak}>
          <TouchableOpacity onPress={navigateToTidaksesuai}>
            <View>
              <Text style={styles.textkirim}>Tidak Sesuai</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  // section 1
  container: {
    padding: 20,
    // paddingTop: 50,
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
  event: {
    paddingLeft: 30,
    paddingTop: 18,
    fontSize: 16,
    fontWeight: "bold",
  },
  pven: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
    display: "flex",
  },
  containerevent: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#E6E6E6",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
  },
  textevent: {
    color: "#55595C",
    fontSize: 15,
  },

  // section 3
  containerjam: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 3,
    borderColor: "#E6E6E6",
    backgroundColor: "none",
    borderRadius: 20,
    padding: 10,
  },

  // section 6
  containfoto: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  foto: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
  },
  ambil1: {
    width: 164,
    height: 224,  
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    alignItems: "center",
  },
  textfoto: {
    color: "#269544",
    marginTop: 10,
  },

  // section 7
  kirim: {
    backgroundColor: "#269544",
    borderRadius: 20,
    padding: 13,
  },
  textkirim: {
    color: "white",
    fontSize: 15,
    fontWeight: "semibold",
    alignSelf: "center",
  },
  pkrm: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 12,
    display: "flex",
  },

//   section 8
tidak: {
    backgroundColor: "#952626",
    borderRadius: 20,
    padding: 13,
  },
});
