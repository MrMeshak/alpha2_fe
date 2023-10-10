export function setFavProductIdsToLocal(favProductIds: string[]) {
  window.localStorage.setItem('favProductIds', JSON.stringify(favProductIds));
}
