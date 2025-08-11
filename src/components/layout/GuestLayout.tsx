import React, { ReactNode } from 'react';
import useHeartbeat from '../../hooks/useHeartbeat';

interface GuestLayoutProps {
    children: ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
    useHeartbeat({ endpoint: '/heartbeats', authenticated: false, interval: 30000 });

    return (
        <div className="guest-layout">
            <header>
                <h1>Welcome to ATS Website</h1>
            </header>
            <main>{children}</main>
            <footer>
                <small>&copy; {new Date().getFullYear()} ATS Website</small>
            </footer>
        </div>
    );
};

export default GuestLayout;