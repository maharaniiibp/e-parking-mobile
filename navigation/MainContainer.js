import React from 'react';
import { Image,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ScannerScreen from './screens/ScannerScreen';
import TikettanyaScreen from './screens/TikettanyaScreen';
import TiketmasukScreen from './screens/TiketmasukScreen';
import TiketkeluarScreen from './screens/TiketkeluarScreen';
import TiketsuksesScreen from './screens/TiketsuksesScreen';
import TiketkeluarsuksesScreen from './screens/TiketkeluarsuksesScreen';
import TidaksesuaiScreen from './screens/TidaksesuaiScreen';
import Scantiketmasuk from './screens/ScantiketmasukScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60, 
  },
};

const tabBarIconStyle = {
  width: 30,
  height: 30,
  resizeMode: 'contain',
};

const MainTabNavigator = () => (
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../assets/home.png')}
            style={tabBarIconStyle}
          />
        ),
      }}
    />
   <Tab.Screen
          name="Scan Ticket"
          component={ScannerScreen}
          options={{
            // headerShown: false,
            tabBarIcon: () => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    backgroundColor: "#269544",
                    padding: 10,
                    borderRadius: 100,
                    position: "absolute",
                    top: -70,
                    borderWidth: 15,
                    borderColor: "white",
                  }}
                >
                  <Image
            source={require('../assets/scan.png')}
            
          />
                </View>
              </View>
            ),
          }}
        />

    <Tab.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        tabBarIcon: () => (
          <Image
            source={require('../assets/profile.png')}
            style={tabBarIconStyle}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

const Index = () => (
  <NavigationContainer>
    {/* Menggunakan Stack Navigator */}
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Menyembunyikan header dari semua layar dalam stack navigator
      }}>
      {/* MainTabNavigator adalah komponen yang mengatur tab utama dalam aplikasi */}
      <Stack.Screen name="MainTab" component={MainTabNavigator} />
      {/* TikettanyaScreen adalah komponen yang akan ditampilkan sebagai layar tambahan */}
      <Stack.Screen name="TikettanyaScreen" component={TikettanyaScreen} />
      <Stack.Screen name="TiketmasukScreen" component={TiketmasukScreen} />
      <Stack.Screen name="TiketkeluarScreen" component={TiketkeluarScreen} />
      <Stack.Screen name="TiketsuksesScreen" component={TiketsuksesScreen} />
      <Stack.Screen name="TiketkeluarsuksesScreen" component={TiketkeluarsuksesScreen} />
      <Stack.Screen name="TidaksesuaiScreen" component={TidaksesuaiScreen} />
      <Stack.Screen name="ScantiketmasukScreen" component={Scantiketmasuk} />



    </Stack.Navigator>
  </NavigationContainer>
);


export default Index;
