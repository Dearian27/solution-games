'use client'
import Image from 'next/image'
import styles from './page.module.css'
import GamesLayout from '@/layouts/GamesLayout'
import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useRef, useState } from 'react'

const GradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
`;

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #99ff3a, #34e89e, #fff70f);
  background-size: 200% 200%;
  animation: ${GradientAnimation} 20s infinite alternate;
`
const InputField = styled.div`
  padding: 40px;
  font-size: 30px;
  border-radius: 20px;
  background-color: white;
  border: none;
  display: flex;
  gap: 10px;
`
const CodeInput = styled.input`
  /* padding: 10px 10px; */
  font-size: 28px;
  border: none;
  outline: none;
  width: 60px;
  height: 70px;
  border: 3px solid #cccccc;
  border-radius: 10px;
  text-align: center;
  
  &.active {
    border-color: black;
  }
`

export default function Games() {
  const router = useRouter();
  const handleGoHome = () => {
    router.push('/');
  }
  const inputs: Array<HTMLInputElement | null> = [];
  for(let i = 0; i < 6; i++) {
    const ref = useRef<HTMLInputElement | null>(null);
    inputs.push(ref);
  }
  const [values, setValues] = useState<string[]>(Array(6).fill(''));

  const handleInputChange = (index: number, value: string) => {
    setValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;

      if(value === '') {
        inputs[index].current!.value = newValues[index];
        if(index !== 0) {
          inputs[index - 1].current!.focus();
        }
      } else if(index < 5) {
        inputs[index].current!.value = newValues[index];
        inputs[index + 1].current!.focus();
      }

      return newValues;
    });
  };

  return (
    <GamesLayout>
      <Header>
        header
      </Header>
      <Section>
        <InputField>
          {inputs.map((inputRef, index) => (
          <CodeInput
            key={index}
            ref={inputRef}
            value={values[index]}
            onChange={e => handleInputChange(index, e.target.value)}
            maxLength={1}
          />
        ))}
        </InputField>
      </Section>
    </GamesLayout>
  )
}