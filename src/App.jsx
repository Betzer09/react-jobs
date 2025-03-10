import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsListings from './components/JobsListings';
import NotFound from './pages/NotFound';
import JobPage, { jobLoader } from './components/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="jobs" element={<JobsListings />} />
      <Route path="jobs/:id" element={<JobPage />} loader={jobLoader} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  {
    basename: "/react-jobs"
  }
);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App