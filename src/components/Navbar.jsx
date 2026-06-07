import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logo}>
          <Sparkles className={styles.logoIcon} size={24} />
          <span>MyPortfolio<span className="text-gradient">.</span></span>
        </Link>
        
        <div className={styles.navLinks}>
          <NavLink to="/" className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
            Giới thiệu
          </NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
            Dự án
          </NavLink>
          <NavLink to="/summary" className={({isActive}) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
            Tổng kết
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
