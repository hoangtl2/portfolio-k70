import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Rocket, Lightbulb } from 'lucide-react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.content}`}>
          <motion.span 
            className={styles.greeting}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Xin chào, tôi là [Tên của bạn]
          </motion.span>
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sinh viên ngành <span className="text-gradient">[Ngành học của bạn]</span>
          </motion.h1>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Chào mừng bạn đến với Digital Portfolio của tôi. Đây là nơi lưu trữ và trưng bày các kỹ năng số đã học được, cũng như hành trình phát triển cá nhân trong kỷ nguyên công nghệ.
          </motion.p>
          <motion.div 
            className={styles.cta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/projects" className="btn btn-primary">Xem Dự Án</Link>
            <a href="#goals" className="btn btn-outline">Mục tiêu học tập</a>
          </motion.div>
        </div>
      </section>

      <section id="goals" className="section container">
        <h2 className={styles.sectionTitle}>Định hướng & <span className="text-gradient">Mục tiêu</span></h2>
        <div className={styles.grid}>
          <motion.div 
            className={`${styles.card} glass`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardIcon}>
              <Target size={32} className="text-gradient" />
            </div>
            <h3 className={styles.cardTitle}>Mục tiêu học tập</h3>
            <p className={styles.cardDesc}>
              [Hãy viết 1-2 câu về mục tiêu học tập của bạn, ví dụ: Nắm vững các công cụ AI để tối ưu hóa hiệu suất làm việc...]
            </p>
          </motion.div>

          <motion.div 
            className={`${styles.card} glass`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className={styles.cardIcon}>
              <Rocket size={32} className="text-gradient" />
            </div>
            <h3 className={styles.cardTitle}>Định hướng phát triển</h3>
            <p className={styles.cardDesc}>
              [Chia sẻ về định hướng nghề nghiệp tương lai, ví dụ: Trở thành một chuyên gia phân tích dữ liệu ứng dụng công nghệ số...]
            </p>
          </motion.div>

          <motion.div 
            className={`${styles.card} glass`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.cardIcon}>
              <Lightbulb size={32} className="text-gradient" />
            </div>
            <h3 className={styles.cardTitle}>Mục đích Portfolio</h3>
            <p className={styles.cardDesc}>
              Thể hiện các kỹ năng số đã học, lưu trữ sản phẩm cá nhân để dễ dàng truy cập và làm minh chứng năng lực cho nhà tuyển dụng.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
