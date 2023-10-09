import { createContext, useState } from 'react';

interface IFavProductData {
  favProductIds: string[];
  toggleFavProduct: (id: string) => void;
}

export const favProductContext = createContext<IFavProductData>({ favProductIds: [], toggleFavProduct: () => {} });

export interface IFavProductsContextProps {
  children: React.ReactNode;
}

export default function FavProductsContextProvider({ children }: IFavProductsContextProps) {
  const [favProductIds, setFavoriteProductIds] = useState<string[]>(['7d4750f7-2124-42f8-8d77-bf19e922a493']);
  const toggleFavProduct = (id: string) => {
    const index = favProductIds.findIndex((productId) => productId === id);
    if (index === -1) {
      favProductIds.push(id);
    } else {
      favProductIds.splice(index, 1);
    }
    setFavoriteProductIds([...favProductIds]);
  };

  return <favProductContext.Provider value={{ favProductIds, toggleFavProduct }}>{children}</favProductContext.Provider>;
}
