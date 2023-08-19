function getFullRoute(route: string) {
  return `${import.meta.env.VITE_BASE_APP_URL}${route}`;
}

const INDEX_ROUTE = '/';
export const FULL_INDEX_ROUTE = getFullRoute(INDEX_ROUTE);

const CHARACTER_ROUTE = '/characters';
export const FULL_CHARACTER_ROUTE = getFullRoute(CHARACTER_ROUTE);
export const FULL_CHARACTER_ROUTE_WITH_ID = `${FULL_CHARACTER_ROUTE}/:index?`;
