import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout, Shop } from '../../components';
export interface AppRoutesInterface {}

const AppRoutes: React.FC<AppRoutesInterface> = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
