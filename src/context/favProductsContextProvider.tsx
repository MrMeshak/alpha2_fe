import { createContext, useEffect, useState } from 'react';
import { fetchFavProductIdsToLocal } from '../services/fetchFavProductIdsToLocal';
import { setFavProductIdsToLocal } from '../services/setFavProductIdsToLocal';

interface IFavProductData {
  favProductIds: string[];
  toggleFavProduct: (id: string) => void;
}

export const favProductContext = createContext<IFavProductData>({ favProductIds: [], toggleFavProduct: () => {} });

export interface IFavProductsContextProps {
  children: React.ReactNode;
}

export default function FavProductsContextProvider({ children }: IFavProductsContextProps) {
  const [favProductIds, setFavoriteProductIds] = useState<string[]>(fetchFavProductIdsToLocal());

  useEffect(() => setFavProductIdsToLocal(favProductIds), [favProductIds]);

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
