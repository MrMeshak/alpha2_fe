import { doc, writeBatch, terminate } from 'firebase/firestore';
import { db, productsCol } from '../client.js';
import { products } from './data/products.js';

export async function seed() {
  const batch = writeBatch(db);

  products.forEach((product) => {
    const productRef = doc(productsCol, product.id);
    batch.set(productRef, product);
  });

  await batch.commit();
}

seed()
  .then(() => console.log('Successfully seeded database'))
  .catch((e) => console.log(`Error: ${e.message}`))
  .finally(async () => await terminate(db));
