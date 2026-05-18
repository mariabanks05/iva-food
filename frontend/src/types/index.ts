export interface Vendor {
  id: string;
  businessName: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  isOpen: boolean;
  deliveryTime: number; // minutos
  deliveryFee: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating?: number;
}

export interface Promotion {
  id: string;
  title: string;
  description: string;
  discount: number;
  image: string;
  code?: string;
  expiresAt: Date;
  vendorId?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone: string;
  type: 'client' | 'vendor' | 'delivery';
  avatar?: string;
  createdAt: Date;
}

export interface Order {
  id: string;
  clientId: string;
  vendorId: string;
  deliveryPersonId?: string;
  items: OrderItem[];
  totalPrice: number;
  status: 'pending' | 'accepted' | 'preparing' | 'ready' | 'on_the_way' | 'delivered' | 'canceled';
  deliveryAddress: Address;
  paymentMethod: string;
  createdAt: Date;
  deliveredAt?: Date;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  notes?: string;
}

export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
}
