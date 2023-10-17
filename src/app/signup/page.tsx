'use client'
import RegistrationLayout from "@/layouts/RegistrationLayout";
import axios from "@/axios";
import styled from 'styled-components';
import { useState } from "react";
import Link from "next/link";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const H1 = styled.h1`
  margin: 25px;
  font-size: 32px;
  text-transform: uppercase;
`
const InputWrapper = styled.label`
  padding: 12px 0;
  position: relative;
`
const Input = styled.input`
  border: 1px solid #ececec;
  box-shadow: 0 0 4px #f0f0f0;
  font-size: 22px;
  padding: 18px 22px;
  width: 540px;
  transition: 0.3s ease-out;
  outline: none;
  &:focus {
    border-color: #dcdcdc;
    box-shadow: 0 0 3px #d7d7d7;
  }
  &::placeholder {
    color: #dcdcdc;
  }
`
const InputIcon = styled.img`
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`
const BtnSubmit = styled.button`
  width: 540px;
  margin: 35px 0;
  padding: 20px 150px;
  color: white;
  background: linear-gradient(-40deg, #6bffeb, #b689ff);
  border: none;
  border-radius: 10px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  
  cursor: pointer;
  outline-offset: -5px;
  outline-color: #ffffff;
`
const H3 = styled.h3`
  color: black;
  font-weight: 400;
`
const StyledLink = styled.span`
  font-weight: 800;
  color: black;
  text-decoration: underline;
  text-decoration-color: black;
`

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await axios.post('/auth/signin', {
      email,
      password
    })
    localStorage.setItem('token', res.data.token);
  }

  return (
    <RegistrationLayout>
        <Form onSubmit={submitHandler}>
          <H1>Create account✨</H1>
          <InputWrapper>
            <Input placeholder="name" type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} />
            <InputIcon />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="email" type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} />
            <InputIcon />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="password" type="password" value={email} onChange={(event) => {setEmail(event.target.value)}} />
            <InputIcon />
          </InputWrapper>
          <InputWrapper>
            <Input placeholder="repeat your password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            <InputIcon />
          </InputWrapper>
          <BtnSubmit type="submit">Sign up</BtnSubmit>

          <H3>Have already an account?
            <Link style={{textDecoration: 'none', marginLeft: '5px'}} href={'/signin'}>
              <StyledLink>Login here</StyledLink>
            </Link>
          </H3>
        </Form>
    </RegistrationLayout>
  )
}