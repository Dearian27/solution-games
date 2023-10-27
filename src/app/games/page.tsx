'use client'
import Image from 'next/image'
import styles from './styles.module.scss'
import GamesLayout from '@/layouts/GamesLayout'
import { useRouter } from 'next/navigation'
import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'

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
        inputs.current[index]!.value = newValues[index];
      } else if(index < 5) {
        inputs.current[index]!.value = newValues[index];
        inputs.current[index + 1]!.focus();
      }

      return newValues;
    });
  };

  const backSpace = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if(event.key === 'Backspace') {
      if(inputs.current[index]?.value === '') {
        if(index !== 0) {
          inputs.current[index-1]!.focus();
        }
      }
    }
  }
  
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData;
    if(!clipboardData) {
      return;
    }
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

  return (
    <GamesLayout>
      <header className={styles.header}>
        header
      </header>
      <section className={styles.section}>
        <div className={styles.inputField}>
          {Array(6).fill(null).map((_, index) => (
          <input 
            className={styles.codeInput}
            key={index}
            ref={(el) => {
              addToRefs(el, index);
            }}
            value={values[index]}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>)  => backSpace(e, index)}
            onChange={e => {handleInputChange(index, e.target.value)}}
            onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => handlePaste(e)}
            maxLength={1}
          />
        ))}
        </div>
      </section>
    </GamesLayout>
  )
}