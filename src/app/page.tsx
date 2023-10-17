'use client'
import Image from 'next/image'
import styles from './page.module.css'
import MainLayout from '../layouts/MainLayout'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'
import GamesContainer from '@/components/GamesContainer'
import { useEffect } from 'react';

// import BMC from 'buymeacoffee.js';
// const coffee = new BMC('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MTI5ZDIwMC1kYTdkLTRjY2MtOWQzZC01ODA0MTU0ZTgyMjYiLCJqdGkiOiI2YzljY2RmZGY1MDhjMzMxN2NiYjYwM2RjYzMxYjM0NDg0NTdiNjRiZGY3NjcwMzM1NjllZTk1ZTRmOTkzYmJmYzZjNDIxYWFjMGI2NDI3YSIsImlhdCI6MTY5NzUzMTk3NywibmJmIjoxNjk3NTMxOTc3LCJleHAiOjE3MTMzNDMxNzcsInN1YiI6IjQ0OTEzODIiLCJzY29wZXMiOltdfQ.PQFVs8UtFoMxPQfQs7Lj-TKPr5isiMFOTKx1MDMOVmIWIVjYzpVppS-TaHj4vWh7NT0nWDK5Z02k_b_h1I5mh4AhfvGyfGgH78XTr6238942Uj1wLhO4hlT0m1JASjyMgXaPszp6iOKBKqiG9BO18FXzwVw62jBXNaXhVAFZ3LcV6NCZm3XuO2-HBwqxQ_bow4sNdjUblFEcqmIuSPh6dVTHrU-69oL42Fa4vlnPLiR_gBHiByYuC3JlzFnDXuSvzbnkz98EiURhM3kEp2KL7j0AzHXvZS1sqOK33JkxcgCzWjZGtTGjYK_3iYUJT2fF6Wo5UBZjbzAXJyO2NBd0VJTPir0KVhag-UaR_3_ya0Ej5cF6EgG0OoJfq2usJR-ZF04jfusTrrBpekfwNx6OQxc2K7lFKM8alYjnR6jm9kHRl6ma7oLMO7yX4SzIKHB0rh_KuE85kYvJ1laNIEBstwE9NzMottQJvJj3wo9_JmszFB4A9-iQeQBSz35IUjfPfMxCEui4-GjSIJip7vF7JjqXYzLTwCVK8WgGlZOo45XqF8HAOuIBk47h-G5SGlPiRegSiDq8_aapQIqQzyBJvPaL1k_YfBHkZAzKHMYMDBxNqPdgaDDUIUlmCiSQSgIFbRjQxcZiPtGY11Bg6xgj_nZSOvef8wgPONML32JJjSA');





const Header = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;
  border: #67f0ff67 5px solid;
`

const Aside = styled.div`
  border: #ff6363 5px solid;
  grid-column-start: 2;
`

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   coffee.Subscriptions().then(data => console.log(data));
  //   coffee.Supporters().then(data => console.log(data));
  //   coffee.Extras().then(data => console.log(data));
  // }, []);

  const handleGoToGames = () => {
    router.push('/games');
  }

  return (
    <MainLayout>
      <Header />
      <Aside />
      
      <GamesContainer />
      {/* <Box /> */}
    </MainLayout>
  )
}
