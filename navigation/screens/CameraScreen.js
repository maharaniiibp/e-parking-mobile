import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleFlipCamera = () => {
    setCameraType(
      cameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  if (hasPermission === null) {
    return <Text>Loading...</Text>; // Menampilkan pesan saat sedang memuat izin kamera
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>; // Menampilkan pesan jika izin kamera tidak diberikan
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={cameraType} ref={cameraRef}>
        <View style={{ flex: 1, backgroundColor: 'transparent', flexDirection: 'row' }}>
          {/* <TouchableOpacity
            style={{ flex: 0.1, alignSelf: 'flex-end', alignItems: 'center' }}
            onPress={handleFlipCamera}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{ flex: 0.1, alignSelf: 'flex-start', alignItems: 'center' }}
            onPress={() => navigation.goBack()} // Contoh menggunakan fungsi navigasi untuk kembali ke layar sebelumnya
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Back </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
