import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Authentication.module.css";
import { FcGoogle } from "react-icons/fc";

const Authentication = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/home"); // Redireciona para a página Home
  };

  return (
    <section className={styles.wrapper}>
      <header>
        <h1 className={styles.heading}>Audio</h1>
        <p className={styles.description}>It's modular and designed to last</p>
      </header>
      <main className={styles.content}>
        <div className={styles.formContainer}>
          <input type="email" placeholder="Email" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          <p className={styles.link}>Forgot Password</p>
          <button className={styles.primaryButton} onClick={handleRedirect}>
            Sign In
          </button>
        </div>
        <button className={styles.googleSignIn} onClick={handleRedirect}>
          <FcGoogle size={20} />
          Sign in with Google
        </button>
      </main>
      <footer>
        <p className={styles.footerText}>
          Didn’t have any account? <span className={styles.signUp}>Sign Up here</span>
        </p>
      </footer>
    </section>
  );
};

export default Authentication;
