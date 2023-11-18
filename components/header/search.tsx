import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import colors from '@/constants/colors';
import { Link } from 'expo-router';

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <Ionicons name="search-outline" size={20} color={colors.primary} />
        <TextInput
          placeholder="Restaurants, groceries, dishes"
          style={styles.input}
          placeholderTextColor="#ccc"
        />
      </View>
      <Link href={'/(modal)/filter'} asChild>
        <TouchableOpacity>
          <Ionicons name="options-outline" size={20} color={colors.primary} />
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
    flex: 1,
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
    color: colors.mediumDark,
    fontSize: 14,
  },
});

export default Search;
