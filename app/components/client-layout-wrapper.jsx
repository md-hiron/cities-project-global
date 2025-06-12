'use client';

import { usePathname } from 'next/navigation';
import Header from './header';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {!isHome && <Header />}
      {children}
    </>
  );
}
