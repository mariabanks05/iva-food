import { create } from 'zustand';
import { User, Order } from '@/types';

interface AppStore {
  user: User | null;
  isAuthenticated: boolean;
  orders: Order[];
  
  // User actions
  setUser: (user: User | null) => void;
  setIsAuthenticated: (value: boolean) => void;
  logout: () => void;
  
  // Orders actions
  setOrders: (orders: Order[]) => void;
  addOrder: (order: Order) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  isAuthenticated: false,
  orders: [],
  
  setUser: (user) => set({ user }),
  setIsAuthenticated: (value) => set({ isAuthenticated: value }),
  logout: () => set({ user: null, isAuthenticated: false, orders: [] }),
  
  setOrders: (orders) => set({ orders }),
  addOrder: (order) => set((state) => ({ orders: [...state.orders, order] })),
}));
