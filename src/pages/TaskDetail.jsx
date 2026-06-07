import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, FileUp, Info } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import styles from './TaskDetail.module.css';

const TaskDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return <Navigate to="/projects" />;
  }

  const Icon = project.icon;

  return (
    <div className="container section min-h-screen">
      <div className={styles.header}>
        <Link to="/projects" className={styles.backBtn}>
          <ArrowLeft size={20} /> Quay lại danh sách
        </Link>
        <motion.div 
          className={styles.titleContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.iconWrapper}>
            <Icon size={36} className={`text-gradient ${project.color}`} />
          </div>
          <h1 className={styles.title}>{project.title}</h1>
        </motion.div>
        <motion.p 
          className={styles.desc}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.fullDesc}
        </motion.p>
      </div>

      <div className={styles.contentGrid}>
        <motion.div 
          className={styles.mainContent}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className={`${styles.card} glass`}>
            <h2 className={styles.cardTitle}>
              <Info size={24} /> Trưng bày Sản phẩm
            </h2>
            
            {/* Đây là KHU VỰC PLACEHOLDER để sinh viên điền nội dung thật */}
            <div className={styles.placeholderBox}>
              <FileUp size={48} className={styles.uploadIcon} />
              <h3 className="text-xl font-semibold mt-4">Khu vực hiển thị sản phẩm</h3>
              <p className={styles.placeholderText}>
                {project.placeholderContent}
              </p>
              <p className="text-sm text-gray-400 mt-4 italic">
                (Hướng dẫn: Mở file src/pages/TaskDetail.jsx và thay thế đoạn placeholderBox này bằng thẻ &lt;img&gt;, &lt;iframe&gt; hoặc nội dung chi tiết bài tập của bạn).
              </p>
            </div>
            {/* Hết KHU VỰC PLACEHOLDER */}
            
          </div>
        </motion.div>

        <motion.div 
          className={styles.sidebar}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`${styles.card} glass`}>
            <h3 className={styles.cardTitle}>Yêu cầu Điểm Tối Đa (Mức 4)</h3>
            <ul className={styles.reqList}>
              {project.requirements.map((req, idx) => (
                <li key={idx} className={styles.reqItem}>
                  <CheckCircle2 size={20} className={styles.checkIcon} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TaskDetail;
