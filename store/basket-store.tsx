import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  price: number;
  info: string;
  img: any;
}

export interface BasketState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  items: number;
  total: number;
}

const useBasketStore = create<BasketState>()((set) => ({
  products: [],
  items: 0,
  total: 0,
  addProduct: (product) => {
    set((state) => {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products[index].quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      return {
        products: state.products,
        items: state.items + 1,
        total: state.total + product.price,
      };
    });
  },
  reduceProduct: (product) => {
    set((state) => {
      const index = state.products.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        state.products[index].quantity -= 1;
        if (state.products[index].quantity === 0) {
          state.products.splice(index, 1);
        }
      }
      return {
        products: state.products,
        items: state.items - 1,
        total: state.total - product.price,
      };
    });
  },
  clearCart: () => {
    set((state) => ({
      ...state,
      products: [],
      items: 0,
      total: 0,
    }));
  },
}));

export default useBasketStore;
