'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export default function RegistrationLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  
  return (
    <>
      <Main>
        {children}
      </Main>
    </>
  )
}