'use client'
import Image from 'next/image'
import styles from './page.module.css'
import GamesLayout from '@/layouts/GamesLayout'
import styled, { keyframes } from 'styled-components'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

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

  const [currentRef, setCurrentRef] = useState<number>(0);
  const inputs = useRef<HTMLInputElement[]>([]);
  const addToRefs = useCallback((el: HTMLInputElement | null, index: number) => {
      if (!el || inputs.current.includes(el)) return;
      inputs.current.splice(index, 0, el);
  }, []);
  const [values, setValues] = useState<string[]>(Array(6).fill(''));

  const handleInputChange = (index: number, value: string) => {
    setValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;

      if(value === '') {
        // console.log(inputs)
        console.log(inputs.current);
        inputs.current[index]!.value = newValues[index];
        // if(index !== 0) {
        //   inputs.current[index - 1]!.focus();
        // }
      } else if(index < 5) {
        inputs.current[index]!.value = newValues[index];
        inputs.current[index + 1]!.focus();
      }

      return newValues;
    });
  };

  const backSpace = (event: KeyboardEvent, index: number) => {
    if(event.key === 'Backspace') {
      if(inputs.current[index]?.value === '') {
        // inputs.current[index-1]?.value = '';
        console.log(index-1);
        inputs.current[index-1]!.focus();
      }
    }
  }
  
  const handlePaste = (e: ClipboardEvent) => {
    e.preventDefault();
    const clipboardData = e.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const parsedData = pastedData.split('');
    
    inputs.current.forEach((input, index) => {
      if(pastedData[index]) {
        input.value = parsedData[index]; 
      } else {
        return;
      }
    })
  }

  useEffect(() => {
    console.log(inputs);
    console.log(currentRef);
  },[inputs, currentRef])

  return (
    <GamesLayout>
      <Header>
        header
      </Header>
      <Section>
        <InputField>
        {/* {inputs.current.map((_, index) => ( */}
          {Array(6).fill(null).map((_, index) => (
          <CodeInput
            key={index}
            ref={(el) => {
              addToRefs(el, index);
            }}
            value={values[index]}
            onKeyDown={e => backSpace(e, index)}
            onChange={e => {handleInputChange(index, e.target.value)}}
            onPaste={(e) => handlePaste(e)}
            maxLength={1}
          />
        ))}
        </InputField>
      </Section>
    </GamesLayout>
  )
}