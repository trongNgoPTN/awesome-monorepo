import { createBrowserRouter, RouterProvider } from 'react-router';
import { WelcomeView } from './pages/WelcomeView';

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { index: true, Component: WelcomeView },
        { path: 'welcome', Component: WelcomeView },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
