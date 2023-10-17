'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 100%;
`


export default function MainLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  
  return (
    <>
      <Main>
        {children}
      </Main>
    </>
  )
}