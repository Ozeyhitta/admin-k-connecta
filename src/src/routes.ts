import { createBrowserRouter } from 'react-router';
import { AuthLayout } from './layouts';
import { LoginPage, RegisterPage } from './features/auth';
import { HomePage } from './pages/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  // Shortcut routes
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/register',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <RegisterPage />,
      },
    ],
  },
]);