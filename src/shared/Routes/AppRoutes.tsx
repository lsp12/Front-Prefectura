import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeControllers } from '../../Modules/Home/Controllers/HomeControllers';
import { HomeGuard } from '../../Modules/Home/Guards/HomeGuard';
import { LoginGuard } from '../../Modules/Login/Guard/LoginGuard';
import SignInSide from '../../Modules/Login/Pages/Login';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<HomeGuard><HomeControllers /></HomeGuard>} />
      <Route path="/login" element={<LoginGuard><SignInSide /></LoginGuard>} />
    </Routes>
  );
}
