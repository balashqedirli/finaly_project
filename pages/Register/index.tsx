import styles from "../../styles/Register/Register.module.css";
import React, { useCallback, useRef, useState } from "react";
import Language from "../../Components/language/Language";
import Image from "next/image";
import registerIllustration from "../../public/images/register.png";
import Link from "next/link";
import Eye from "../../public/images/eye.svg";
import Eye2 from "../../public/images/eye2.svg";
import axios from "axios";
import { useAuth } from "../AuthContext/Authcontext";

interface Errors {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
}

interface User {
  fullname: string;
  username: string;
  email: string;
}

export default function Register() {
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [message, setMessage] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const fullnameRef = useRef<HTMLInputElement>(null);

  const onClick = useCallback(() => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;
    const fullname = fullnameRef.current?.value;

    axios
      .post<User>("http://localhost:3000/api/auth/signup", {
        email,
        password,
        username,
        fullname,
      })
      .then((result) => {
        login(result.data); 
        setMessage("Registration successful");
        setTimeout(() => setMessage(""), 3000);
      })
      .catch((error) => {
        setMessage("Failed to register");
      });
  }, [login]);

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
          <Image src={registerIllustration} alt="Register" />
        </div>
        <div className={styles.formContainer}>
          <div className={styles.tabs}>
            <Link href="/Login">
              <p className={styles.tab}>Login</p>
            </Link>
            <p className={styles.tab}>Register</p>
          </div>
          <div className={styles.form}>
            <label className={styles.label}>
              <p>Full Name</p>
              <input type="text" className={styles.input} ref={fullnameRef} />
              {errors.fullname && (
                <span className={styles.error} data-testid="fullname-error">
                  {errors.fullname}
                </span>
              )}
            </label>
            <label className={styles.label}>
              <p>Username</p>
              <input type="text" className={styles.input} ref={usernameRef} />
              {errors.username && (
                <span className={styles.error} data-testid="username-error">
                  {errors.username}
                </span>
              )}
            </label>
            <label className={styles.label}>
              <p>Email</p>
              <input type="email" className={styles.input} ref={emailRef} />
              {errors.email && (
                <span className={styles.error} data-testid="email-error">
                  {errors.email}
                </span>
              )}
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
              {errors.password && (
                <span className={styles.error} data-testid="password-error">
                  {errors.password}
                </span>
              )}
            </label>
            <button onClick={onClick} className={styles.loginButton}>
              Register
            </button>
            {message && (
              <div className={styles.messageContainer}>
                <span className={styles.message}>{message}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
