'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { MenuItem } from '../data/menu';

export interface CartItem {
  product: MenuItem;
  quantity: number;
  isMenu?: boolean;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: MenuItem, quantity?: number, isMenu?: boolean) => void;
  removeItem: (productId: string, isMenu?: boolean) => void;
  updateQuantity: (productId: string, quantity: number, isMenu?: boolean) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((product: MenuItem, quantity = 1, isMenu = false) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id && Boolean(i.isMenu) === Boolean(isMenu));
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && Boolean(i.isMenu) === Boolean(isMenu)
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { product, quantity, isMenu }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((productId: string, isMenu?: boolean) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && (isMenu === undefined || Boolean(i.isMenu) === Boolean(isMenu))))
    );
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number, isMenu?: boolean) => {
    if (quantity <= 0) {
      setItems((prev) =>
        prev.filter((i) => !(i.product.id === productId && (isMenu === undefined || Boolean(i.isMenu) === Boolean(isMenu))))
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.product.id === productId && (isMenu === undefined || Boolean(i.isMenu) === Boolean(isMenu))
          ? { ...i, quantity }
          : i
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => {
    const unitPrice = i.isMenu && i.product.menuPrice ? i.product.menuPrice : i.product.price;
    return sum + unitPrice * i.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

