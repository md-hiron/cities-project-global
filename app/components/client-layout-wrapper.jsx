'use client';

import { usePathname } from 'next/navigation';
import InnerPageHeader from './inner-page-header';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <>
      {!isHome && <InnerPageHeader/>}
      {children}
    </>
  );
}
