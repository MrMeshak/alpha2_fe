export interface ICategory_HeaderData {
  title: string;
}

export function categoryHeaderResolver(category: string): ICategory_HeaderData {
  const title = category.charAt(0).toUpperCase() + category.slice(1);
  return { title };
}
