'use client'
import Image from 'next/image'
import styles from './page.module.css'
import MainLayout from '../layouts/MainLayout'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import GamesContainer from '@/components/GamesContainer'
import { useEffect } from 'react';
import Header from '@/components/Header'
import RightPanel from '@/components/RightPanel'
import BMC from 'buymeacoffee.js';

const coffee = new BMC('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTI5ZDIwMC1kYTdkLTRjY2MtOWQzZC01ODA0MTU0ZTgyMjYiLCJqdGkiOiIwNzU1ODg5ZWYwYzk4MTVkOTA0ODVkODM1YWJkMWM0Nzc2ZTU1ZTAwZjMzZDk5Nzk3MTI2N2JlZmZiZDk0OTQ5OTMxNDVlMmU5NWQ2NGI4NyIsImlhdCI6MTY5ODQxNzMzMSwibmJmIjoxNjk4NDE3MzMxLCJleHAiOjE3MTQyMjg1MzEsInN1YiI6IjQ1NDU4ODAiLCJzY29wZXMiOltdfQ.e_v63cNraSOsfg8D34hiBfec81x6FpBg5E0BiMlkXtvFKaEfa7hIuthMWBsXP8yiWVRTBmrrU8CSX6S_57x1UWFB_i4ptvNAQTM7BWzGKhPZghVumTX8QgXWIpzwQYTzONYPnMJiJmDHqbvq5dzy9PzjtrHZHfN2qa2ac9ZiGi4OHUYNaxOR8A4DJTS_wArBjRW-EW_CciipRc0Ob0m7r1ANhEC98ffxB7YrB2J1nDgO9Rpai3ABqK1-S7jhvI4OfYMgsZWIMhGzJNM6GBysCG6qAjPQVHnbkgdH4cV3uwi5sqb3eUj3zmnDqnhPYphkwFF-x3f4SdonuM4WuXVLGr-oA-CBYJ3-KqAiHLeJtNkU1Xq-piXN5nyl3941bCyaQJPYcb1Xt6e14uXZ_riP87NU7XhejWH8hoYce_mtGVw12NdWfSBUXk1FIVM6fzw9dyRkAys-iFKZ6oSU3xyZamWi0-Vy48X_aRHBelB3MLuHfKF9IIf-at4-4VcMJ2Cf8qVEIovCAMHATgzZP8Fpo_j_r63jtLwNy07HET9JMuZaLpsDORWKkJaT7osg1YQodHg78IbVNfFRpZXbzzG7zKC-BJ-t0k02YAxmFuk2Qgj1E1taYzVnHYJfGWPKc7okH-Ck_TV03TQjMIkaJ6qcOlevzvbQ2XW_nwcyNDEWqpw');


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    coffee.Subscriptions().then(data => console.log(data));
    coffee.Supporters().then(data => console.log(data));
    coffee.Extras().then(data => console.log(data));
  }, []);

  const handleGoToGames = () => {
    router.push('/games');
  }

  return (
    <MainLayout>
      <Header />
      <RightPanel />
      
      <GamesContainer />
    </MainLayout>
  )
}
