import React, { useEffect } from "react";
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("../common/ThemeToggle"), {
    ssr: false,
});

const Header = () => {

    const router = useRouter();

    const routeChangeStart = () => {

        // Do something everytime route changes -  may be a loader
    }

    useEffect(() => {
        Router.events.on('routeChangeStart', routeChangeStart);
        return () => {
            Router.events.off('routeChangeStart', routeChangeStart);
        }
    });

    return (
        <header>
            <nav>
                <ul>
                    <li><Link href="/"><a className={router.pathname === '/' ? 'active' : ''}>Home</a></Link></li>
                    <li><Link href="/about"><a className={router.pathname === '/about' ? 'active' : ''}>About</a></Link></li>
                    <li><Link href="/api-page"><a className={router.pathname === '/api-page' ? 'active' : ''}>API Page</a></Link></li>
                </ul>
            </nav>
            <ThemeToggle />
        </header>
    );
}

export default Header;

