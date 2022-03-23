import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBarC } from '../../Home/components/appBar/AppBar';
import { Oficio } from '../Pages/Oficio';

export function OficioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppBarC />}>
        <Route index element={<Oficio />} />
      </Route>
      <Route path="*" element={<h1>Page no Found</h1>} />
    </Routes>
  );
}
