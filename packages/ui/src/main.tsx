import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home, Person, Settings } from '@mui/icons-material';

import { App } from './app/App.tsx';
import { appConfig } from './AppConfig';
import type { HeaderTab } from './components/scaffolding/HeaderTab.ts';
import type { MenuItemProps } from './components/scaffolding/MenuItemProps.ts';
import { UserProfile } from './components/UserProfile.tsx';
import Demo from './Demo.tsx';
import { DummyHeaderContent, dummyUser } from './DummyHeaderContent.tsx';
import { store } from './redux/store';

const tabs: HeaderTab[] = [
  {
    label: 'Home',
    icon: Home,
    to: '/home',
  },
  {
    label: 'Profile',
    icon: Person,
    to: '/profile',
    count: 2,
    color: 'primary',
  },
  {
    label: 'Settings',
    icon: Settings,
    to: '/settings',
    count: null,
  },
];

const menuItems: MenuItemProps[] = [
  {
    label: 'Home',
    to: '/home',
  },
  {
    label: 'Settings',
    to: '/settings',
    count: null,
    subMenuItems: [
      {
        label: 'Foo',
        to: '/settings',
        count: null,
      },
      {
        label: 'Bar',
        to: '/settings',
        count: null,
      },
      {
        label: 'Baz',
        to: '/settings',
        count: null,
      },
    ],
  },
  {
    label: 'Profile',
    to: '/profile',
    count: 2,
    color: 'primary',
  },
];

// eslint-disable-next-line react-refresh/only-export-components
function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <App
          {...appConfig}
          tabs={tabs}
          menuItems={menuItems}
          headerContent={<DummyHeaderContent />}
        />
      ),
      children: [
        { index: true, Component: Demo },
        { path: 'home', Component: Demo },
        {
          path: 'profile',
          element: <UserProfile user={dummyUser} />,
        },
        { path: 'settings', Component: Demo },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
