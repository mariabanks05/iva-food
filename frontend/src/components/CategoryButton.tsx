import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { COLORS, SPACING, RADIUS, SHADOWS, FONTS } from '@styles/theme';
import { Category } from '@/types';

interface CategoryButtonProps {
  category: Category;
  isSelected?: boolean;
  onPress: () => void;
}

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isSelected = false,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected && styles.selectedContainer,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.icon}>{category.icon}</Text>
      <Text
        style={[
          styles.name,
          isSelected && styles.selectedName,
        ]}
        numberOfLines={1}
      >
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.gray100,
    marginRight: SPACING.sm,
    ...SHADOWS.small,
  },
  selectedContainer: {
    backgroundColor: COLORS.primary,
  },
  icon: {
    fontSize: 24,
    marginBottom: SPACING.xs,
  },
  name: {
    fontSize: FONTS.small,
    color: COLORS.gray600,
    fontWeight: '500',
  },
  selectedName: {
    color: COLORS.white,
    fontWeight: '600',
  },
});
