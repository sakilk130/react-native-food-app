import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheetModal,
} from '@gorhom/bottom-sheet';

import colors from '@/constants/colors';
import { Link } from 'expo-router';

const BottomSheet = React.forwardRef<BottomSheetModal, any>((props, ref) => {
  const snapPoints = React.useMemo(() => ['50%'], []);
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );
  const { dismiss } = useBottomSheetModal();

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      overDragResistanceFactor={0}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ display: 'none' }}
    >
      <View style={styles.container}>
        <View style={styles.topButtons}>
          <TouchableOpacity style={styles.activeButton}>
            <Text style={styles.activeText}>Delivery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.subheader}>Your Location</Text>
          <Link href={'/(modal)/location-search'} asChild>
            <TouchableOpacity style={styles.location}>
              <Ionicons
                name="location-outline"
                size={20}
                color={colors.medium}
              />
              <Text style={{ flex: 1 }}>Current location</Text>
              <Ionicons
                name="chevron-forward"
                size={20}
                color={colors.primary}
              />
            </TouchableOpacity>
          </Link>
        </View>
        <View>
          <Text style={styles.subheader}>Arrival Time</Text>
          <TouchableOpacity style={styles.location}>
            <Ionicons
              name="stopwatch-outline"
              size={20}
              color={colors.medium}
            />
            <Text style={{ flex: 1 }}>Now</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => dismiss()}
          style={styles.confirmButton}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    marginBottom: 32,
  },
  activeButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 32,
    paddingVertical: 8,
    borderRadius: 32,
    color: '#fff',
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  inactiveText: {
    color: colors.primary,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 5,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  confirmText: {
    color: '#fff',
    fontWeight: '700',
  },
  subheader: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 16,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderColor: colors.lightGrey,
  },
});

export default BottomSheet;
