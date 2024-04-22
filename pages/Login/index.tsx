import styles from "../../styles/Login/Login.module.css";
import React, { useCallback, useRef, useState } from "react";
import Language from "../../Components/language/Language";
import Image from "next/image";
import loginIllustration from "../../public/images/loginRegister.png";
import Link from "next/link";
import Eye from "../../public/images/eye.svg";
import Eye2 from "../../public/images/eye2.svg";
import axios from "axios";
import type { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "next-auth/providers";


export const options:NextAuthOptions() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    axios
      .post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      })
      .then((result) => {
        if (result.status === 200) {
          setMessage("Logged in successfully");
          setTimeout(() => setMessage(""), 3000);
        }
      })
      .catch((error) => {
        setMessage("Unable to log in");
      });
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Link href="/">
          <h1 className={styles.food}>Foody</h1>
        </Link>
        <div className={styles.lang}>
          <Language />
        </div>
      </div>
      <div className={styles.loginReg}>
        <div className={styles.box}>
          <Image src={loginIllustration} alt="login" />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.tabs}>
            <p className={styles.tab}>Login</p>

            <Link href="/Register">
              <p className={styles.tab}>Register</p>
            </Link>
          </div>
          <div className={styles.form}>
            <label className={styles.label}>
              

              <p>Email</p>
              <input type="text" className={styles.input} ref={emailRef} />
            </label>

            <label className={styles.label}>
              <p>Password</p>
              <div className={styles.passwordContainer}>

                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.input}
                  ref={passwordRef}
                />
                <span
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <Image src={Eye} alt="Hide" width={30} height={30} />
                  ) : (
                    <Image src={Eye2} alt="Show" width={30} height={30} />
                  )}
                </span>
              </div>
            </label>
            <button onClick={onClick} className={styles.loginButton}>
              Log in
            </button>
          </div>
          {message && (
            <div className={styles.messageContainer}>
              <span className={styles.message}>{message}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}



