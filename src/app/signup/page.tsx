'use client'
import RegistrationLayout from "@/layouts/RegistrationLayout";
import axios from "@/axios";
import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from './styles.module.scss';




export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    const res = await axios.post('/auth/signin', {
      email,
      password
    })
    localStorage.setItem('token', res.data.token);
  }

  return (
    <RegistrationLayout>
        <form className={styles.form} onSubmit={submitHandler}>
          <h1 className={styles.title}>Create account✨</h1>
          <label className={styles.inputWrapper}>
            <input className={styles.input} placeholder="name" type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} />
          </label>
          <label className={styles.inputWrapper}>
            <input className={styles.input} placeholder="email" type="text" value={email} onChange={(event) => {setEmail(event.target.value)}} />
          </label>
          <label className={styles.inputWrapper}>
            <input className={styles.input} placeholder="password" type="password" value={email} onChange={(event) => {setEmail(event.target.value)}} />
          </label>
          <label className={styles.inputWrapper}>
            <input className={styles.input} placeholder="repeat your password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </label>
          <button className={styles.sumbitBtn} type="submit">Sign up</button>
          <h3 className={styles.hint}>Have already an account?
            <Link style={{textDecoration: 'none', marginLeft: '5px'}} href={'/signin'}>
              <span className={styles.styledLink}>Login here</span>
            </Link>
          </h3>
        </form>
    </RegistrationLayout>
  )
}