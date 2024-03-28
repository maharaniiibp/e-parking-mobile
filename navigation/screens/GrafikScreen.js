import React from "react";
import { View, ScrollView, Image, StyleSheet, Text } from "react-native";

const HorizontalImageScrollView = () => {
  return (
    <ScrollView horizontal style={styles.scrollView}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/jan.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulanjan}>Januari</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/feb.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Februari</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/mar.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Maret</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/apr.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>April</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/mei.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Mei</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/jun.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Juni</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/jul.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Juli</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/aug.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Agustus</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/sep.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>September</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/okt.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Oktober</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/nov.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>November</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/grafik/des.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.bulan}>Desemer</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    padding: 10,
  },
  imageContainer: {
    marginRight: 25,
    borderRadius: 10,
    overflow: "hidden",
  },
  bulan: {
    alignSelf: "center",
    paddingTop: 12,

  },
  bulanjan: {
    alignSelf: "center",
  },
});

export default HorizontalImageScrollView;
