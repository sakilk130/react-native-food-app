import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

import Categories from '@/components/categories/categories';
import colors from '@/constants/colors';
import Restaurants from '@/components/restaurants/restaurants';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 110 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 120,
    backgroundColor: colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
export default HomeScreen;
