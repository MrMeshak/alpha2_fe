import { initializeApp } from 'firebase/app';
import { getFirestore, collection, CollectionReference, DocumentData } from 'firebase/firestore';
import { IProduct } from './schema.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBzkiL50wfUUB2y8tw_Viy_SgjYgPO_Ht4',
  authDomain: 'alpha2-bbe43.firebaseapp.com',
  projectId: 'alpha2-bbe43',
  storageBucket: 'alpha2-bbe43.appspot.com',
  messagingSenderId: '734340853890',
  appId: '1:734340853890:web:f6581fe19751f0bc65449b'
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();

const createCollection = <T = DocumentData>(collectionName: string) => {
  return collection(db, collectionName) as CollectionReference<T>;
};

export const productsCol = createCollection<IProduct>('products');
