import React from 'react';
import { Navigate } from 'react-router-dom';

export default function Protege({estConnecter,children}) {
    if(!estConnecter) return <Navigate to="/" />;
  return <>{children}</>;
 
}
