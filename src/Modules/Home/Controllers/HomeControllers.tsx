import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppBarC } from '../components/appBar/AppBar';
import Dashboard from '../Pages/Home';

export function HomeControllers() {
  return (
    <Routes>
      <Route path="/" element={<AppBarC />}>
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
}
