import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import GrafikScreen from "./GrafikScreen";

const HomeScreen = () => {
  return (
    <ScrollView>

    <View style={styles.body}>
      {/* section 1 */}
      <View style={styles.satu}>
        <View style={styles.rowsatu}>
          <View style={styles.colsatu}>
            <Image source={require("../../assets/home/bam.png")} />
          </View>
          <View style={styles.colsatu}>
            <Text style={styles.textLight}>Selamat Bertugas,</Text>
            <Text style={styles.textBold}>Bambang Sutrisno</Text>
          </View>
        </View>
      </View>

      {/* section 2 */}
      <View style={styles.dua}>
        <View style={styles.rowdua}>
          <View style={styles.coldua}>
            <Image source={require("../../assets/home/Bus.png")} />
          </View>
          <View style={styles.coltulis}>
            <Text style={styles.textLight}>Total pengunjung hari ini</Text>
            <Text style={styles.pengunjung}>1.200 Pengunjung</Text>
          </View>
        </View>
      </View>

      {/* section 3 */}
      <View style={styles.container}>
        <View style={styles.green}>
          <Image source={require("../../assets/home/Ticket.png")} />
          <Text style={styles.lighttiga}>Parkir dengan tiket</Text>
          <Text style={styles.pengunjungtiga}>1.005 Pengunjung</Text>
        </View>
        <View style={styles.pink}>
          <Image source={require("../../assets/home/Danger.png")} />
          <Text style={styles.lighttiga}>Parkir tanpa tiket</Text>
          <Text style={styles.pengunjungpink}>195 Pengunjung</Text>
        </View>
      </View>

      {/* section 4 */}
      <View style={styles.grafik}>
        <View style={styles.bg}>
          <Text style={styles.grafiktext}>Grafik Pengunjung</Text>
          <GrafikScreen/>
        </View>
      </View>
    </View>
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  // body: {
  //   backgroundColor: "#F0F2F5",
  // },

  // section 1
  satu: {
    padding: 20,
    paddingTop: 40,
  },
  rowsatu: {
    flexDirection: "row",
    display: "flex",
  },
  colsatu: {
    marginRight: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
  textLight: {
    fontSize: 15,
    fontWeight: "300",
  },
  textBold: {
    fontSize: 18,
    fontWeight: "bold",
  },
  border: {
    backgroundColor: "#EEF3F7",
    padding: "5px",
  },

  // section 2
  dua: {
    display: "flex",
    padding: 20,
  },
  rowdua: {
    flexDirection: "row",
    display: "flex",
    borderWidth: 2,
    borderColor: "#9ED4D7",
    backgroundColor: "#EEF3F7",
    borderRadius: 10,
    padding: 25,
  },
  coltulis: {
    marginLeft: 50,
    alignItems: "center",
  },
  pengunjung: {
    color: "#268E95",
    fontSize: 25,
    fontWeight: "bold",
  },
  coldua: {
    paddingTop: 20,
    marginLeft: 15,
  },

  // section 3
  container: {
    padding: 20,
    flexDirection: "row", // Mengatur arah tata letak menjadi horizontal (row)
    justifyContent: "space-between", // Mengatur jarak antara box secara merata
    alignItems: "center", // Menyusun box secara vertikal di tengah container
  },
  green: {
    width: 180,
    height: 130,
    backgroundColor: "#D0E6DA",
    borderWidth: 2,
    borderColor: "#269544",
    borderRadius: 10,
    padding: 20,
  },
  pink: {
    width: 180,
    height: 130,
    backgroundColor: "#F7EEEE",
    borderWidth: 2,
    borderColor: "#EDD6D6",
    borderRadius: 10,
    padding: 20,
  },
  pengunjungtiga: {
    color: "#269544",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
  },
  lighttiga: {
    fontSize: 15,
    fontWeight: "300",
    paddingTop: 18,
  },
  pengunjungpink: {
    color: "#952626",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 5,
  },

  // section 4
  grafik: {
    padding: 20,
  },
  grafiktext: {
    padding: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  bg: {
    backgroundColor: "white",
    borderRadius: 10,
    height: 350,
    
  },
});

export default HomeScreen;
