'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  height: 100vh;
  grid-template-rows: 80px 1fr;
  grid-template-columns: 6fr 2fr;
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