import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Homepage from '../Pages/Homepage'; 
import StudentPortal from '../Pages/StudentPortal'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Homepage />} />
      <Route path="/studentportal" element={<StudentPortal />} />
    </>
  )
);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
