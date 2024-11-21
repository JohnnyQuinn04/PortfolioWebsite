import React from "react";
import styles from "../styles/Header.module.css";  // Importing CSS Module

function Header() {
  return (
    <header className={styles.header}>
      <h1>Johnny Quinn's Portfolio</h1>
      <nav>
        <a href="/about" className={styles.navLink}>About</a>
        <a href="/projects" className={styles.navLink}>Projects</a>
        <a href="/contact" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
