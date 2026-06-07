import { motion } from 'framer-motion';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <div className="container section min-h-screen">
      <div className={styles.header}>
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sản phẩm <span className="text-gradient">Học tập</span>
        </motion.h1>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tập hợp 6 nhiệm vụ thực hành đánh giá kỹ năng số ứng dụng trong học tập và nghiên cứu.
        </motion.p>
      </div>

      <div className={styles.grid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
