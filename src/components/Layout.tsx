import React from 'react';
import type { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative min-h-screen flex flex-col items-center">
            {/* Background Overlay Effects */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-noise opacity-[0.03]"></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-alistair/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
            </div>

            <nav className="w-full z-50 p-6 flex justify-between items-center max-w-7xl mx-auto backdrop-blur-sm sticky top-0 border-b border-white/5 bg-background/50">
                <div className="text-xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gold to-white">
                    THE CHRONOS CUP
                </div>
                <div className="flex space-x-6 text-sm font-semibold tracking-wide text-gray-400">
                    <a href="#teaser" className="hover:text-gold transition-colors">TEASER</a>
                    <a href="#paths" className="hover:text-gold transition-colors">PATHS</a>
                    <a href="#chapters" className="hover:text-gold transition-colors">CHAPTERS</a>
                </div>
            </nav>

            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-10 flex-grow">
                {children}
            </main>

            <footer className="w-full z-50 py-8 text-center text-xs text-gray-600 border-t border-white/5 bg-background/80 backdrop-blur-sm">
                <p>&copy; {new Date().getFullYear()} The Chronos Cup. All rights reserved.</p>
                <p className="mt-2 text-gray-700">In Capitalia, Time is Money.</p>
            </footer>
        </div>
    );
};

export default Layout;
