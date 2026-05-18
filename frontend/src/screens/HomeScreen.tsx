import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SPACING, FONTS } from '@styles/theme';
import { Header } from '@components/Header';
import { CategoryButton } from '@components/CategoryButton';
import { PromotionCard } from '@components/PromotionCard';
import { VendorCard } from '@components/VendorCard';
import { Vendor, Promotion, Category } from '@/types';

const { width } = Dimensions.get('window');

// Mock Data - Later will come from Firebase
const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Pizzas', icon: '🍕' },
  { id: '2', name: 'Hambúrguer', icon: '🍔' },
  { id: '3', name: 'Sushi', icon: '🍣' },
  { id: '4', name: 'Açaí', icon: '🍇' },
  { id: '5', name: 'Chinês', icon: '🥡' },
  { id: '6', name: 'Árabe', icon: '🌮' },
];

const MOCK_PROMOTIONS: Promotion[] = [
  {
    id: '1',
    title: 'Desconto em Pizzas',
    description: 'Aproveite 30% de desconto em toda pizzaria "Pizza da Vila"',
    discount: 30,
    image: 'https://via.placeholder.com/400x200/FF6B35/FFFFFF?text=Pizza+Desconto',
    code: 'PIZZA30',
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: '2',
    title: 'Primeira Compra',
    description: 'Ganhe 20% de desconto na sua primeira compra',
    discount: 20,
    image: 'https://via.placeholder.com/400x200/8B4513/FFFFFF?text=Primeira+Compra',
    code: 'PRIMEIRA20',
    expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
  {
    id: '3',
    title: 'Hambúrguer em Promoção',
    description: 'Compre 1 e leve 2 em "Burger Plus"',
    discount: 50,
    image: 'https://via.placeholder.com/400x200/FFD700/000000?text=Hamburger+50OFF',
    expiresAt: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  },
];

const MOCK_VENDORS: Vendor[] = [
  {
    id: '1',
    businessName: 'Pizza da Vila',
    category: 'Pizzaria',
    rating: 4.8,
    reviews: 234,
    image: 'https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=Pizza',
    isOpen: true,
    deliveryTime: 30,
    deliveryFee: 5.5,
  },
  {
    id: '2',
    businessName: 'Burger Plus',
    category: 'Hamburgueria',
    rating: 4.5,
    reviews: 156,
    image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Burger',
    isOpen: true,
    deliveryTime: 25,
    deliveryFee: 4.5,
  },
  {
    id: '3',
    businessName: 'Sushi House',
    category: 'Japonesa',
    rating: 4.9,
    reviews: 312,
    image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Sushi',
    isOpen: true,
    deliveryTime: 45,
    deliveryFee: 8.0,
  },
  {
    id: '4',
    businessName: 'Açaí Paradise',
    category: 'Açaí e Sobremesas',
    rating: 4.3,
    reviews: 89,
    image: 'https://via.placeholder.com/300x200/FF6B35/FFFFFF?text=Acai',
    isOpen: false,
    deliveryTime: 20,
    deliveryFee: 3.0,
  },
  {
    id: '5',
    businessName: 'Chines Mandarim',
    category: 'Comida Chinesa',
    rating: 4.6,
    reviews: 178,
    image: 'https://via.placeholder.com/300x200/8B4513/FFFFFF?text=Chines',
    isOpen: true,
    deliveryTime: 35,
    deliveryFee: 6.0,
  },
  {
    id: '6',
    businessName: 'Árabe Delicia',
    category: 'Comida Árabe',
    rating: 4.7,
    reviews: 201,
    image: 'https://via.placeholder.com/300x200/FFD700/000000?text=Arabe',
    isOpen: true,
    deliveryTime: 30,
    deliveryFee: 5.0,
  },
];

export const HomeScreen = ({ navigation }: any) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('1');
  const [searchValue, setSearchValue] = useState('');
  const [location, setLocation] = useState('Rua das Flores, 123 - Ivaí');
  const [filteredVendors, setFilteredVendors] = useState(MOCK_VENDORS);
  const [isLoading, setIsLoading] = useState(false);

  // Filter vendors based on search and category
  useEffect(() => {
    const filtered = MOCK_VENDORS.filter(vendor => {
      const matchesSearch = vendor.businessName
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const matchesCategory =
        selectedCategory === '1' ? true : vendor.category.toLowerCase().includes(searchValue);

      return matchesSearch || matchesCategory;
    });

    setFilteredVendors(filtered);
  }, [searchValue, selectedCategory]);

  const handleLocationPress = () => {
    // TODO: Navigate to location selection screen
    console.log('Location pressed');
  };

  const handleVendorPress = (vendor: Vendor) => {
    // TODO: Navigate to vendor detail screen
    console.log('Vendor pressed:', vendor.businessName);
  };

  const handlePromotionPress = (promotion: Promotion) => {
    // TODO: Navigate to promotion detail screen
    console.log('Promotion pressed:', promotion.title);
  };

  const renderSection = (title: string, description?: string) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {description && <Text style={styles.sectionDescription}>{description}</Text>}
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        onLocationPress={handleLocationPress}
        location={location}
        onSearchChange={setSearchValue}
        searchValue={searchValue}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Promotions Section */}
        {MOCK_PROMOTIONS.length > 0 && (
          <View style={styles.section}>
            {renderSection('🎉 Promoções')}
            <FlatList
              horizontal
              data={MOCK_PROMOTIONS}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.promotionWrapper}>
                  <PromotionCard
                    promotion={item}
                    onPress={() => handlePromotionPress(item)}
                  />
                </View>
              )}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              contentContainerStyle={styles.promotionsList}
            />
          </View>
        )}

        {/* Categories Section */}
        <View style={styles.section}>
          {renderSection('🍽️ Categorias')}
          <FlatList
            horizontal
            data={MOCK_CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CategoryButton
                category={item}
                isSelected={selectedCategory === item.id}
                onPress={() => setSelectedCategory(item.id)}
              />
            )}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesList}
          />
        </View>

        {/* Restaurants Section */}
        <View style={styles.section}>
          {renderSection(
            '🏪 Restaurantes e Lojas',
            'Veja o que está disponível agora'
          )}

          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <View style={styles.vendorsGrid}>
              {filteredVendors.length > 0 ? (
                filteredVendors.map(vendor => (
                  <VendorCard
                    key={vendor.id}
                    vendor={vendor}
                    onPress={() => handleVendorPress(vendor)}
                  />
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyStateIcon}>🔍</Text>
                  <Text style={styles.emptyStateText}>
                    Nenhum restaurante encontrado
                  </Text>
                  <Text style={styles.emptyStateSubText}>
                    Tente buscar por outro termo
                  </Text>
                </View>
              )}
            </View>
          )}
        </View>

        {/* Bottom Spacing */}
        <View style={{ height: SPACING.xl }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundSecondary,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.lg,
    backgroundColor: COLORS.white,
    marginBottom: SPACING.sm,
  },
  sectionHeader: {
    marginBottom: SPACING.md,
  },
  sectionTitle: {
    fontSize: FONTS.large,
    fontWeight: 'bold',
    color: COLORS.gray600,
    marginBottom: SPACING.xs,
  },
  sectionDescription: {
    fontSize: FONTS.small,
    color: COLORS.gray500,
  },
  promotionsList: {
    paddingRight: SPACING.md,
  },
  promotionWrapper: {
    marginRight: SPACING.md,
  },
  categoriesList: {
    paddingRight: SPACING.md,
  },
  vendorsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyState: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: SPACING.xl,
  },
  emptyStateIcon: {
    fontSize: 64,
    marginBottom: SPACING.md,
  },
  emptyStateText: {
    fontSize: FONTS.large,
    fontWeight: '600',
    color: COLORS.gray600,
    marginBottom: SPACING.sm,
  },
  emptyStateSubText: {
    fontSize: FONTS.regular,
    color: COLORS.gray500,
  },
});
