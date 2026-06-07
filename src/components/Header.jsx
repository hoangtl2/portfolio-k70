import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <a className={styles.brand} href="#top" aria-label="Portfolio của Hoàng Viết Hoàng">
        <span className={styles.brandMark}>H</span>
        <span>Hoàng Viết Hoàng</span>
      </a>

      <button 
        className={styles.navToggle} 
        onClick={() => setIsOpen(!isOpen)}
        type="button" 
        aria-expanded={isOpen} 
        aria-controls="site-nav"
      >
        <span className="sr-only">Mở điều hướng</span>
        <span>=</span>
      </button>

      <nav className={`${styles.siteNav} ${isOpen ? styles.open : ''}`} id="site-nav" aria-label="Điều hướng chính">
        <a href="#about" onClick={() => setIsOpen(false)}>Giới thiệu</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Dự án</a>
        <a href="#process" onClick={() => setIsOpen(false)}>Quy trình</a>
        <a href="#reflection" onClick={() => setIsOpen(false)}>Tổng kết</a>
      </nav>
    </header>
  );
}
