import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view/parallax-scroll-view';
import colors from '@/constants/colors';
import { restaurant } from '@/assets/data/restaurant';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Details = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: '',
      headerTintColor: colors.primary,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.roundButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.primary} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.bar}>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="share-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.roundButton}>
            <Ionicons name="search-outline" size={24} color={colors.primary} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <>
      <ParallaxScrollView
        backgroundColor="#fff"
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ height: 300, width: '100%' }}
          />
        )}
        contentBackgroundColor={colors.lightGrey}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <View style={styles.detailsContainer}>
          <Text>Scroll me</Text>
        </View>
      </ParallaxScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: colors.lightGrey,
  },
  stickySection: {
    backgroundColor: '#fff',
    marginLeft: 70,
    height: 100,
    marginTop: 20,
  },
  stickySectionText: { fontSize: 20, margin: 10 },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
export default Details;
