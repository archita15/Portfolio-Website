// src/components/Hero.tsx
'use client'

import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Hi, I am Archita Palkar</h1>
          <p className={styles.subtitle}>I build modern, responsive websites.</p>
          <a href="#projects" className={styles.ctaButton}>See My Work</a>
        </div>
        <div className={styles.imageSection}>
          {/* Make sure you have a profile image placed in the public folder (e.g., public/profile.jpg) */}
          <img src="/profile.jpg" alt="Your Name" className={styles.profileImage} />
        </div>
      </div>
      <div className={styles.scrollDown}>
        <a href="#about">
          <span className={styles.mouse}>
            <span className={styles.wheel}></span>
          </span>
        </a>
      </div>
    </section>
  )
}
