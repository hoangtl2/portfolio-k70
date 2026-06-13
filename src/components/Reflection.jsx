import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Cpu, Star, CheckCircle, TrendingUp, Code, AlertTriangle } from 'lucide-react';
import styles from './Reflection.module.css';

export default function Reflection() {
  const [activeTab, setActiveTab] = useState('journey');

  const tabs = [
    { id: 'journey', label: 'Hành trình', icon: Map },
    { id: 'skills', label: 'Kỹ năng', icon: Cpu },
    { id: 'highlights', label: 'Tâm đắc', icon: Star },
  ];

  return (
    <section className={`section ${styles.reflectionSection}`} id="reflection" aria-labelledby="reflection-title">
      <div className={styles.sectionHeading}>
        <p className="eyebrow">Tổng kết</p>
        <h2 id="reflection-title">Nhìn lại hành trình</h2>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tabList} role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={18} />
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTabIndicator" className={styles.activeIndicator} />
                )}
              </button>
            );
          })}
        </div>

        <div className={styles.tabContent}>
          <AnimatePresence mode="wait">
            {activeTab === 'journey' && (
              <motion.div
                key="journey"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.timelineContainer}
              >
                <div className={styles.timelineLine}></div>
                
                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}><CheckCircle size={16} /></div>
                  <div className={`gl-card ${styles.timelineCard}`}>
                    <h3>Chuyển đổi tư duy</h3>
                    <p>Quá trình xây dựng Portfolio này không chỉ là việc hoàn thành bài tập, mà giống như xây dựng một "căn cứ kỹ thuật số". Tôi đã chuyển đổi từ việc tiếp nhận yêu cầu học thuật khô khan sang việc làm chủ một sản phẩm thực tế mang đậm dấu ấn cá nhân.</p>
                  </div>
                </div>

                <div className={styles.timelineItem}>
                  <div className={styles.timelineDot}><TrendingUp size={16} /></div>
                  <div className={`gl-card ${styles.timelineCard}`}>
                    <h3>Sự trưởng thành</h3>
                    <p>Nhìn lại 6 bài tập đã qua, tôi cảm thấy tự hào vì thấy rõ sự phát triển của bản thân. Từ việc thiết kế Prompt chuyên sâu, đến tích hợp AI vào quy trình sáng tạo mà vẫn giữ vững đạo đức và liêm chính học thuật.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className={styles.skillsGrid}
              >
                <div className={`gl-card ${styles.skillCard}`}>
                  <div className={styles.skillHeader}>
                    <div className={styles.skillTitle}>
                      <Cpu className="text-gradient" size={20} />
                      <h4>Kỹ thuật AI & Prompt</h4>
                    </div>
                    <span className={styles.skillPercent}>90%</span>
                  </div>
                  <div className={styles.progressBar}><motion.div initial={{ width: 0 }} animate={{ width: '90%' }} transition={{ duration: 1, delay: 0.2 }} className={styles.progressFill}></motion.div></div>
                  <p className={styles.skillDesc}>Hiểu cơ chế, tối ưu prompt, áp dụng AI có trách nhiệm.</p>
                </div>

                <div className={`gl-card ${styles.skillCard}`}>
                  <div className={styles.skillHeader}>
                    <div className={styles.skillTitle}>
                      <Code className="text-gradient" size={20} />
                      <h4>React & Front-end</h4>
                    </div>
                    <span className={styles.skillPercent}>85%</span>
                  </div>
                  <div className={styles.progressBar}><motion.div initial={{ width: 0 }} animate={{ width: '85%' }} transition={{ duration: 1, delay: 0.3 }} className={styles.progressFill}></motion.div></div>
                  <p className={styles.skillDesc}>Tự tay code website từ con số 0, ứng dụng Glassmorphism UI.</p>
                </div>

                <div className={`gl-card ${styles.skillCard} ${styles.fullWidth}`}>
                  <p className={styles.skillSummary}>
                    Hành trang quý giá nhất cho con đường Kỹ sư Phần mềm của tôi không chỉ là việc biết dùng công cụ, mà là <strong>tư duy giải quyết vấn đề</strong> và <strong>năng lực tự học</strong> trong môi trường số biến đổi không ngừng.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'highlights' && (
              <motion.div
                key="highlights"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={styles.bentoGrid}
              >
                <div className={`gl-card ${styles.bentoCard} ${styles.highlightBento}`}>
                  <div className={styles.bentoIcon}><Star size={32} /></div>
                  <h3>Điểm tâm đắc nhất</h3>
                  <p>Thay vì dùng các template có sẵn như Wix hay Notion, tôi đã <strong>tự tay code toàn bộ giao diện</strong> theo phong cách Glassmorphism Aurora hiện đại. Việc hệ thống hóa minh chứng rõ ràng và trình bày trực quan giúp kiến thức đọng lại sâu sắc hơn.</p>
                </div>

                <div className={`gl-card ${styles.bentoCard} ${styles.challengeBento}`}>
                  <div className={styles.bentoIcon}><AlertTriangle size={32} /></div>
                  <h3>Thách thức lớn nhất</h3>
                  <p>Tối ưu hóa giao diện (Responsive) cho di động và xử lý logic kết nối trình xem PDF trực tiếp trên web mà không làm nặng trang. Đồng thời, việc phải đối soát cẩn thận từng trích dẫn để đảm bảo chuẩn mực đạo đức AI cũng đòi hỏi sự tỉ mỉ rất cao.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

