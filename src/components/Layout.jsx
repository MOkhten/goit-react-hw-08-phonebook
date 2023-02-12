import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from './AppBar/AppBar';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <ResponsiveAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;