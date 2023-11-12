import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import colors from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === 'ios' ? '#000' : '#fff'}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => {
              console.log('first');
            }}
          >
            <Image
              source={require('@/assets/images/bike.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('first');
            }}
            style={styles.locationContainer}
          >
            <Text style={styles.location}>Delivery · Now</Text>
            <View style={styles.currentLocation}>
              <Text style={styles.currentLocationText}>Current Location</Text>
              <Ionicons name="chevron-down" size={20} color={colors.primary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.person}>
            <Ionicons name="person-outline" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  image: {
    height: 30,
    width: 30,
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  location: {
    fontSize: 14,
    color: colors.medium,
  },
  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  currentLocationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  person: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});

export default Header;
