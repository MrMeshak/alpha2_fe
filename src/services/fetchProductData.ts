import { getDoc, doc } from 'firebase/firestore';
import { productsCol } from '../firestore/client.js';
import { EmptyInputError, NotFoundError } from './types/error.types.js';
import { IProduct } from '../firestore/schema.js';

export async function fetchProductData(productId: string): Promise<IProduct> {
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

fetchProductData('2e9166fa-4084-49f5-bb9b-5873e51277f3')
  .then((productData) => console.log(productData))
  .catch((e) => console.log(e));
