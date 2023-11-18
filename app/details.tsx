import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SectionList,
  ListRenderItem,
} from 'react-native';
import React, { useLayoutEffect } from 'react';

import ParallaxScrollView from '@/components/parallax-scroll-view/parallax-scroll-view';
import colors from '@/constants/colors';
import { restaurant } from '@/assets/data/restaurant';
import { useNavigation } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Details = () => {
  const navigation = useNavigation();
  const DATA = restaurant.food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  const renderItem: ListRenderItem<any> = ({ item, index }) => (
    <Link href={{ pathname: '/(modal)/dish', params: { id: item.id } }} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text style={styles.dish}>{item.name}</Text>
          <Text style={styles.dishText}>{item.info}</Text>
          <Text style={styles.dishText}>${item.price}</Text>
        </View>
        <Image source={item.img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );

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
          <Text style={styles.restaurantName}>{restaurant.name}</Text>
          <Text style={styles.restaurantDescription}>
            {restaurant.delivery} ·{' '}
            {restaurant.tags.map(
              (tag, index) =>
                `${tag}${index < restaurant.tags.length - 1 ? ' · ' : ''}`
            )}
          </Text>
          <Text style={styles.restaurantDescription}>{restaurant.about}</Text>
          <SectionList
            contentContainerStyle={{ paddingBottom: 50 }}
            scrollEnabled={false}
            sections={DATA}
            keyExtractor={(item, index) => `${item.id + index}`}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, index } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: 1, backgroundColor: colors.grey }} />
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  marginHorizontal: 16,
                  height: 1,
                  backgroundColor: colors.grey,
                }}
              />
            )}
          />
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
  restaurantName: {
    fontSize: 30,
    margin: 16,
  },
  restaurantDescription: {
    fontSize: 16,
    margin: 16,
    lineHeight: 22,
    color: colors.medium,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
  },
  dish: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dishImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  dishText: {
    fontSize: 14,
    color: colors.mediumDark,
    paddingVertical: 4,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 40,
    margin: 16,
  },
});
export default Details;
