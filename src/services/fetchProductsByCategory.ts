import { query, where, getDocs } from 'firebase/firestore';
import { productsCol } from '../firestore/client.js';
import { EmptyInputError } from './types/error.types.js';
import { IProduct } from '../firestore/schema.js';

export async function fetchProductsByCategory(category: string): Promise<IProduct[]> {
  if (category === '') {
    throw new EmptyInputError('Error: could not fetch data as category was empty');
  }

  const q = query(productsCol, where('categories', 'array-contains', category));
  const querySnap = await getDocs(q);

  return querySnap.docs.map((doc) => doc.data());
}
