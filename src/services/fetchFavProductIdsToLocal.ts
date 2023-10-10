export function fetchFavProductIdsToLocal(): string[] {
  const favProductIdsStr = window.localStorage.getItem('favProductIds');
  if (!favProductIdsStr) {
    return [];
  }

  return JSON.parse(favProductIdsStr);
}
