import { getDoc, doc } from 'firebase/firestore';
import { productsCol } from '../firestore/client.js';
import { EmptyInputError, NotFoundError } from './types/error.types.js';
import { IProduct } from '../firestore/schema.js';

export async function fetchProduct(productId: string): Promise<IProduct> {
  if (productId === '') {
    throw new EmptyInputError('Error: could not fetch data as productId was empty');
  }

  const productRef = doc(productsCol, productId);
  const productSnap = await getDoc(productRef);

  if (!productSnap.exists()) {
    throw new NotFoundError('Error: Product could not be found');
  }

  return productSnap.data();
}
