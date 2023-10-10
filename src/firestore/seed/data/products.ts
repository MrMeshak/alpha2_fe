import { IProduct } from '../../schema';
import { ekenasetVariants, lisboVariants, malmVariants, pinntorpVariants, voxlovVariants } from './variants.js';

const malmProductId = '95eb08b9-01ad-4158-a6f0-8ceca0ff9071';

const malm: IProduct = {
  id: malmProductId,
  name: 'Malm',
  productType: 'drawers',
  categories: ['storage', 'drawers'],
  searchTags: ['drawers', 'storage', 'chest'],
  variants: malmVariants
};

const pinntorpId = '7d4750f7-2124-42f8-8d77-bf19e922a493';

const pinntorp: IProduct = {
  id: pinntorpId,
  name: 'Pinntorp',
  productType: 'table',
  categories: ['table', 'desk', 'dining'],
  searchTags: ['table', 'desk', 'dinning'],
  variants: pinntorpVariants
};

const lisboProductId = '2e9166fa-4084-49f5-bb9b-5873e51277f3';

const lisbo: IProduct = {
  id: lisboProductId,
  name: 'Lisbo',
  productType: 'chair',
  categories: ['chairs'],
  searchTags: ['chair', 'dining'],
  variants: lisboVariants
};

const voxlovProductId = 'cc0f2982-d447-4bd1-8106-5a3b8b209afc';

const voxlov: IProduct = {
  id: voxlovProductId,
  name: 'Voxlov',
  productType: 'chair',
  categories: ['chairs'],
  searchTags: ['chairs', 'dining'],
  variants: voxlovVariants
};

const ekenasetProductId = '3e8f791f-c246-4695-87bc-308aa9d2822a';

const ekenaset: IProduct = {
  id: ekenasetProductId,
  name: 'Voxlov',
  productType: 'couch',
  categories: ['featured', 'couches'],
  searchTags: ['couch', 'sofa'],
  variants: ekenasetVariants
};

export const products: IProduct[] = [malm, pinntorp, lisbo, voxlov, ekenaset];
