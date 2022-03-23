import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomeControllers } from '../../Modules/Home/Controllers/HomeControllers';
import { HomeGuard } from '../../Modules/Home/Guards/HomeGuard';
import { LoginGuard } from '../../Modules/Login/Guard/LoginGuard';
import SignInSide from '../../Modules/Login/Pages/Login';
import { OficioRoutes } from '../../Modules/Oficio/Routes/OficioRoutes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<HomeGuard><HomeControllers /></HomeGuard>} />
      <Route path="/oficio/*" element={<HomeGuard><OficioRoutes /></HomeGuard>} />
      <Route path="/login" element={<LoginGuard><SignInSide /></LoginGuard>} />
    </Routes>
  );
}
