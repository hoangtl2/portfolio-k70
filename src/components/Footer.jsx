import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <p className={styles.text}>
          &copy; {new Date().getFullYear()} Digital Portfolio. Built with <span className={styles.heart}>❤</span> cho môn học Nhập môn Công nghệ số.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
