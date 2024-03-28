import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function TidaksesuaiScreen() {
  const navigation = useNavigation();

  const navigateToTikettanya = () => {
    navigation.navigate("TikettanyaScreen");
  };
  const navigateToTiketsukses = () => {
    navigation.navigate("TiketsuksesScreen");
  };

  return (
    <>
      {/* TIDAK SESUAI */}
      {/* section 1 */}
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToTikettanya}>
          <View style={styles.left}>
            <AntDesign name="left" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textscan}>Tidak Sesuai</Text>
        </View>
      </View>

      {/* section 2 */}
      <Text style={styles.event}>Masukkan Nomor Polisi</Text>
      <View style={styles.pven}>
        <View style={styles.containerevent}>
          <View>
            <Text style={styles.textevent}> </Text>
          </View>
        </View>
      </View>

      {/* section 3 */}
      <Text style={styles.event}>Foto Pengambil dan Scan KTP </Text>
      <View style={styles.foto}>
        <View style={styles.bg}>
          <View style={styles.containfoto}>
            <View style={styles.ambil1}>
              <Feather
                style={styles.camera}
                name="camera"
                size={24}
                color="#269544"
              />
              <Text style={styles.textfoto}>Ambil foto pengambil</Text>
            </View>
            <View style={styles.ambil1}>
              <Feather
                style={styles.camera}
                name="camera"
                size={24}
                color="#269544"
              />
              <Text style={styles.textfoto}> Ambil foto scan KTP</Text>
            </View>
          </View>
        </View>
      </View>

      {/* section 4 */}
      <View style={styles.pkrm}>
        <View style={styles.kirim}>
          <TouchableOpacity onPress={navigateToTiketsukses}>
            <View>
              <Text style={styles.textkirim}>Kirim</Text>
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
    paddingTop: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  textscan: {
    fontWeight: "bold",
    fontSize: 23,
    marginLeft: 100,
  },
  left: {
    marginRight: 10,
  },

  // section 2
  event: {
    paddingLeft: 30,
    paddingTop: 20,
    fontSize: 18,
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
    padding: 12,
  },
  textevent: {
    color: "#E6E6E6",
    fontSize: 17,
  },
  // section 3
  containfoto: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bg: {
    backgroundColor: "white",
  },
  foto: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 8,
  },
  ambil1: {
    width: 164,
    height: 224,
    borderWidth: 2,
    borderColor: "#606060",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  camera: {
    alignItems: "center",
  },
  textfoto: {
    color: "#606060",
    marginTop: 10,
  },

  // section 4
  kirim: {
    backgroundColor: "#269544",
    borderRadius: 22,
    padding: 18,
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
    display: "flex",
    paddingTop: 280,
  },

});
