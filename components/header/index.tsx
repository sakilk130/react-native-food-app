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
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

import BottomSheet from '@/components/bottom-sheet/bottom-sheet';
import colors from '@/constants/colors';
import Search from './search';

const Header = () => {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetModalRef.current?.present();
  };

  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === 'ios' ? '#000' : '#fff'}
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <SafeAreaView style={styles.safeArea}>
        <BottomSheet ref={bottomSheetModalRef} />
        <View style={styles.container}>
          <TouchableOpacity onPress={openModal}>
            <Image
              source={require('@/assets/images/bike.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openModal}
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
        <Search />
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
