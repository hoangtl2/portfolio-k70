import { motion } from 'framer-motion';
import { BookOpen, Star, Trophy, AlertTriangle } from 'lucide-react';
import styles from './Summary.module.css';

const Summary = () => {
  return (
    <div className="container section min-h-screen">
      <div className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tổng Kết & <span className="text-gradient">Đánh Giá</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Nhìn lại hành trình học tập và những trải nghiệm giá trị có được từ dự án Portfolio này.
        </motion.p>
      </div>

      <div className={styles.grid}>
        <motion.div 
          className={`${styles.card} glass ${styles.fullWidth}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className={styles.cardTitle}>
            <div className={styles.iconWrapper}><BookOpen className="text-gradient" size={24} /></div>
            Trải nghiệm & Cảm nhận cá nhân
          </h2>
          <div className={styles.contentBox}>
            <p className="italic">Gợi ý trả lời cho Mức 4 (Điểm tối đa): Hãy phân tích sâu sắc sự trưởng thành của bản thân. Quá trình làm dự án này đã thay đổi tư duy của bạn về Công nghệ số như thế nào?</p>
            <p><strong>[Hãy xóa đoạn này và viết cảm nhận của bạn vào đây. Khoảng 2-3 đoạn văn chi tiết]</strong></p>
          </div>
        </motion.div>

        <motion.div 
          className={`${styles.card} glass`}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className={styles.cardTitle}>
            <div className={styles.iconWrapper}><Star className="text-gradient" size={24} /></div>
            Kiến thức & Kỹ năng quan trọng
          </h2>
          <div className={styles.contentBox}>
            <p className="italic">Gợi ý: Liệt kê và phân tích các kỹ năng, cách bạn sẽ áp dụng chúng trong tương lai.</p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>Kỹ năng Prompt Engineering: Ứng dụng để...</li>
              <li>Tư duy dữ liệu: Ứng dụng để...</li>
              <li>[Thêm các kỹ năng khác của bạn]</li>
            </ul>
          </div>
        </motion.div>

        <motion.div 
          className={`${styles.card} glass`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className={styles.cardTitle}>
            <div className={styles.iconWrapper}><Trophy className="text-gradient" size={24} /></div>
            Điểm tâm đắc nhất
          </h2>
          <div className={styles.contentBox}>
            <p className="italic">Gợi ý: Chọn 1 sản phẩm hoặc 1 kỹ năng bạn thấy tự hào nhất và giải thích lý do tại sao.</p>
            <p><strong>[Viết điểm tâm đắc của bạn vào đây]</strong></p>
          </div>
        </motion.div>

        <motion.div 
          className={`${styles.card} glass ${styles.fullWidth}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className={styles.cardTitle}>
            <div className={styles.iconWrapper}><AlertTriangle className="text-gradient" size={24} /></div>
            Thách thức & Cách vượt qua
          </h2>
          <div className={styles.contentBox}>
            <p className="italic">Gợi ý: Trình bày một khó khăn gặp phải (VD: khó khăn khi viết Prompt, khó khăn khi hợp tác nhóm) và mô tả CHI TIẾT cách bạn đã giải quyết nó.</p>
            <p><strong>[Viết thách thức của bạn vào đây]</strong></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Summary;
