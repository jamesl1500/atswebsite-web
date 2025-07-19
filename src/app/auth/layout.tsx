import React from 'react';

// Import styles
import '@/styles/styles.scss';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">
        {children}
      </div>
    </div>
  );
}