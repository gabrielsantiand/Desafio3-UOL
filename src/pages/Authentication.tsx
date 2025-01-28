import React from "react";
import styles from "./Authentication.module.css";
import { FcGoogle } from "react-icons/fc";

const Authentication = () => {
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
          <button className={styles.primaryButton}>Sign In</button>
        </div>
        <button className={styles.googleSignIn}>
          <FcGoogle size={20} />
          Sign in with Google
        </button>
      </main>
      <footer>
        <p className={styles.footerText}>
          Don't have an account? <span className={styles.signUp}>Sign Up here</span>
        </p>
      </footer>
    </section>
  );
};

export default Authentication;
