import { getDocs, query } from 'firebase/firestore';
import { productsCol } from '../firestore/client.js';
import { IProduct } from '../firestore/schema.js';

export async function fetchProducts(): Promise<IProduct[]> {
  const q = query(productsCol);
  const querySnap = await getDocs(q);

  return querySnap.docs.map((doc) => doc.data());
}
