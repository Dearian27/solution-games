'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './layouts.module.scss';

export default function MainLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  
  return (
    <>
      <main className={styles.mainContainer}>
        {children}
      </main>
    </>
  )
}