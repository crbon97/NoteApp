import React from 'react';

import AuthProvider from './Auth/AuthProvider';
import RootRoutes from './Routes/RootRoutes';

const Providers: React.FC<{}> = () => {
  return (
    <AuthProvider>
      <RootRoutes />
    </AuthProvider>
  );
};

export default Providers;
