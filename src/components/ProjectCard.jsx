import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/task/${project.id}`} className={`${styles.card} glass`}>
        <div className={styles.iconWrapper}>
          <Icon size={32} className={`text-gradient ${project.color}`} />
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.desc}>{project.shortDesc}</p>
        <div className={styles.footer}>
          Xem chi tiết <ArrowRight size={16} className={styles.arrow} />
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
