import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';
import { COLORS, SPACING, RADIUS, FONTS } from '@styles/theme';

interface HeaderProps {
  onLocationPress: () => void;
  location: string;
  onSearchChange: (text: string) => void;
  searchValue: string;
}

export const Header: React.FC<HeaderProps> = ({
  onLocationPress,
  location,
  onSearchChange,
  searchValue,
}) => {
  return (
    <View style={styles.container}>
      {/* Location Bar */}
      <TouchableOpacity
        style={styles.locationBar}
        onPress={onLocationPress}
      >
        <Text style={styles.locationIcon}>📍</Text>
        <View style={styles.locationContent}>
          <Text style={styles.locationLabel}>Entregar em</Text>
          <Text style={styles.locationText} numberOfLines={1}>
            {location || 'Selecionar endereço'}
          </Text>
        </View>
        <Text style={styles.locationArrow}>›</Text>
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar restaurantes ou pratos"
          placeholderTextColor={COLORS.gray400}
          value={searchValue}
          onChangeText={onSearchChange}
        />
        {searchValue.length > 0 && (
          <TouchableOpacity onPress={() => onSearchChange('')}>
            <Text style={styles.clearButton}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.md,
    paddingBottom: SPACING.sm,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray200,
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.md,
    backgroundColor: COLORS.gray100,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },
  locationIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  locationContent: {
    flex: 1,
  },
  locationLabel: {
    fontSize: FONTS.small,
    color: COLORS.gray500,
    marginBottom: 2,
  },
  locationText: {
    fontSize: FONTS.medium,
    color: COLORS.gray600,
    fontWeight: '500',
  },
  locationArrow: {
    fontSize: 20,
    color: COLORS.gray400,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.gray100,
    borderRadius: RADIUS.md,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.sm,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: SPACING.sm,
  },
  searchInput: {
    flex: 1,
    height: 45,
    fontSize: FONTS.regular,
    color: COLORS.gray600,
  },
  clearButton: {
    fontSize: 18,
    color: COLORS.gray400,
    padding: SPACING.xs,
  },
});
