import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS, FONTS } from '@styles/theme';
import { Vendor } from '@/types';

interface VendorCardProps {
  vendor: Vendor;
  onPress: () => void;
}

const { width } = Dimensions.get('window');
const cardWidth = (width - SPACING.md * 2 - SPACING.sm) / 2;

export const VendorCard: React.FC<VendorCardProps> = ({ vendor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, !vendor.isOpen && styles.closed]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: vendor.image }}
          style={styles.image}
        />
        {!vendor.isOpen && (
          <View style={styles.closedOverlay}>
            <Text style={styles.closedText}>Fechado</Text>
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {vendor.businessName}
        </Text>
        
        <Text style={styles.category} numberOfLines={1}>
          {vendor.category}
        </Text>

        <View style={styles.footer}>
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {vendor.rating.toFixed(1)}</Text>
            <Text style={styles.reviews}>({vendor.reviews})</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoText}>⏱️ {vendor.deliveryTime}min</Text>
          <Text style={styles.infoText}>💳 R$ {vendor.deliveryFee.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: cardWidth,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    ...SHADOWS.small,
  },
  closed: {
    opacity: 0.6,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  closedOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closedText: {
    color: COLORS.white,
    fontSize: FONTS.medium,
    fontWeight: 'bold',
  },
  content: {
    padding: SPACING.sm,
  },
  name: {
    fontSize: FONTS.medium,
    fontWeight: '600',
    color: COLORS.gray600,
    marginBottom: SPACING.xs,
  },
  category: {
    fontSize: FONTS.small,
    color: COLORS.gray500,
    marginBottom: SPACING.sm,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: FONTS.small,
    fontWeight: '600',
    color: COLORS.gray600,
  },
  reviews: {
    fontSize: FONTS.small,
    color: COLORS.gray500,
    marginLeft: SPACING.xs,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: SPACING.sm,
    borderTopWidth: 1,
    borderTopColor: COLORS.gray200,
  },
  infoText: {
    fontSize: FONTS.small,
    color: COLORS.gray500,
  },
});
