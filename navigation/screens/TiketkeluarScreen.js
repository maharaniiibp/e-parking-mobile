import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TiketkeluarScreen() {
  const navigation = useNavigation();

  const navigateToTikettanya = () => {
    navigation.navigate('TikettanyaScreen');
  };
  const navigateToTiketkeluarsukses = () => {
    navigation.navigate('TiketkeluarsuksesScreen');
  };

  return (
    <>
    {/* TAMBAH TIKET MANUAL KELUAR */}
      {/* section 1 */}
      <View style={styles.container}>
        <TouchableOpacity onPress={navigateToTikettanya}>
          <View style={styles.left}>
            <AntDesign name="left" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textscan}>Tambah Tiket Manual</Text>
        </View>
      </View>

      {/* section 2 */}
      <Text style={styles.event}>Nomor Polisi</Text>
      <View style={styles.pven}>
        <View style={styles.containerevent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Masukkan nomor polisi"
            label=""
          ></TextInput>
        </View>
        </View>
      </View>

      {/* section 3 */}
      <View style={styles.pkrm}>
        <View style={styles.kirim}>
        <TouchableOpacity onPress={navigateToTiketkeluarsukses}>
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
    // paddingTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textscan: {
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 70,
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
kirim:{
    backgroundColor: '#269544',
    borderRadius: 22,
    padding: 18,
},
textkirim:{
  color:'white',
  fontSize:15,
  fontWeight:'semibold',
  alignSelf:'center'
},
pkrm: {
  paddingLeft:30,
  paddingRight:30,
  paddingTop:550,
  display: 'flex',
},
});
