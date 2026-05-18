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
import { Promotion } from '@/types';

interface PromotionCardProps {
  promotion: Promotion;
  onPress: () => void;
}

const { width } = Dimensions.get('window');

export const PromotionCard: React.FC<PromotionCardProps> = ({ promotion, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: promotion.image }}
        style={styles.image}
      />
      
      <View style={styles.badge}>
        <Text style={styles.badgeText}>-{promotion.discount}%</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {promotion.title}
        </Text>
        
        <Text style={styles.description} numberOfLines={2}>
          {promotion.description}
        </Text>

        {promotion.code && (
          <View style={styles.codeContainer}>
            <Text style={styles.codeLabel}>Código: </Text>
            <Text style={styles.code}>{promotion.code}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - SPACING.md * 2,
    height: 200,
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    overflow: 'hidden',
    marginRight: SPACING.sm,
    ...SHADOWS.medium,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  badge: {
    position: 'absolute',
    top: SPACING.md,
    right: SPACING.md,
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: FONTS.large,
    fontWeight: 'bold',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: SPACING.md,
  },
  title: {
    color: COLORS.white,
    fontSize: FONTS.medium,
    fontWeight: 'bold',
    marginBottom: SPACING.xs,
  },
  description: {
    color: COLORS.gray200,
    fontSize: FONTS.small,
    marginBottom: SPACING.sm,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  codeLabel: {
    color: COLORS.accent,
    fontSize: FONTS.small,
    fontWeight: '600',
  },
  code: {
    color: COLORS.accent,
    fontSize: FONTS.small,
    fontWeight: 'bold',
  },
});
