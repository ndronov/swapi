import { Navigate, Route, Routes } from 'react-router-dom';

import { FULL_CHARACTER_ROUTE_WITH_ID, FULL_INDEX_ROUTE } from '@common/index';
import { MainPage, CharacterPage } from '@pages/index';

export function AppRoutes() {
  return (
    <Routes>
      <Route path={FULL_INDEX_ROUTE} element={<MainPage />} />

      <Route path={FULL_CHARACTER_ROUTE_WITH_ID} element={<CharacterPage />} />

      <Route path="*" element={<Navigate to={FULL_INDEX_ROUTE} replace />} />
    </Routes>
  );
}
