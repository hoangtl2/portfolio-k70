import { useState } from 'react';
import styles from './Projects.module.css';

const projects = [
  {
    id: "01",
    category: "system",
    tag: "Hệ thống",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    desc: "Thực hành tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp trên Windows, đồng thời xây dựng quy tắc tổ chức thư mục để quản lý tài liệu học tập gọn gàng.",
    points: ["Làm việc với File Explorer", "Tổ chức cấu trúc thư mục rõ ràng", "Phân biệt xóa tạm và xóa vĩnh viễn"],
    pdf: "Week1.pdf"
  },
  {
    id: "02",
    category: "research",
    tag: "Nghiên cứu",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    desc: "Tìm hiểu chủ đề Federated Learning và quyền riêng tư dữ liệu, sử dụng nguồn học thuật để phân tích cách mô hình AI có thể học mà không cần tập trung dữ liệu cá nhân.",
    points: ["Sử dụng toán tử tìm kiếm nâng cao", "Đánh giá độ tin cậy của nguồn tin", "Tổng hợp ứng dụng và giới hạn thực tế"],
    pdf: "Week2.pdf"
  },
  {
    id: "03",
    category: "prompt",
    tag: "Prompt",
    title: "Viết prompt hiệu quả cho tác vụ học tập",
    desc: "So sánh prompt ban đầu, prompt cải tiến và kết quả đầu ra từ AI cho các tác vụ như tóm tắt tài liệu, giải thích khái niệm và tạo câu hỏi ôn tập.",
    points: ["Xác định vai trò và bối cảnh cho AI", "Đặt ràng buộc đầu ra rõ ràng", "Đánh giá và cải tiến prompt theo kết quả"],
    pdf: "Week3.pdf"
  },
  {
    id: "04",
    category: "collab",
    tag: "Hợp tác",
    title: "Công cụ hợp tác trực tuyến cho dự án nhóm",
    desc: "Trình bày cách sử dụng ClickUp, Google Docs, Google Drive và Discord để quản lý nhiệm vụ, lưu trữ tài liệu và phối hợp trong dự án Realtime Bidding System.",
    points: ["Theo dõi tiến độ To do - Doing - Done", "Chuẩn hóa tài liệu và file minh chứng", "Giao tiếp kỹ thuật theo nhóm"],
    pdf: "Week4.pdf"
  },
  {
    id: "05",
    category: "creative",
    tag: "Sáng tạo",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    desc: "Xây dựng bài viết và infographic 'Sống Xanh cùng Gen Z' bằng quy trình kết hợp AI tạo văn bản, AI tạo hình ảnh và công cụ thiết kế.",
    points: ["Lên ý tưởng và phát triển đề cương", "Tạo hình ảnh minh họa bằng AI", "Biên tập lại để giữ tính cá nhân"],
    pdf: "Week5.pdf"
  },
  {
    id: "06",
    category: "ethics",
    tag: "Đạo đức",
    title: "Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    desc: "Phân tích chính sách sử dụng AI trong môi trường đại học, ghi lại nhật ký prompt và xây dựng quan điểm cá nhân về minh bạch, liêm chính và năng lực thực chất.",
    points: ["Đề xuất nguyên tắc sử dụng AI cá nhân", "Ghi lại prompt và vai trò hỗ trợ của AI", "Nhận diện rủi ro khi phụ thuộc vào AI"],
    pdf: "Week6.pdf"
  }
];

export default function Projects({ onOpenPdf }) {
  const [filter, setFilter] = useState('all');

  const filteredProjects = projects.filter(p => filter === 'all' || p.category.includes(filter));

  return (
    <section className={`section ${styles.projectsSection}`} id="projects" aria-labelledby="projects-title">
      <div className={styles.sectionHeading}>
        <p className="eyebrow">Dự án</p>
        <h2 id="projects-title">Các bài tập đã hoàn thành</h2>
      </div>

      <div className={styles.filterTabs} role="tablist" aria-label="Lọc dự án theo kỹ năng">
        {['all', 'system', 'research', 'prompt', 'collab', 'creative', 'ethics'].map(f => {
          const tabLabels = {
            'all': 'Tất cả',
            'system': 'Hệ thống',
            'research': 'Nghiên cứu',
            'prompt': 'Prompt',
            'collab': 'Hợp tác',
            'creative': 'Sáng tạo',
            'ethics': 'Đạo đức'
          };
          
          return (
            <button 
              key={f}
              className={`${styles.filterTab} ${filter === f ? styles.active : ''}`} 
              onClick={() => setFilter(f)}
              type="button" 
              role="tab" 
              aria-selected={filter === f}
            >
              {tabLabels[f]}
            </button>
          );
        })}
      </div>

      <div className={styles.projectGrid}>
        {filteredProjects.map(p => (
          <article key={p.id} className={`gl-card ${styles.projectCard}`}>
            <div className={styles.projectTop}>
              <span className={styles.projectNumber}>{p.id}</span>
              <span className={styles.projectTag}>{p.tag}</span>
            </div>
            <h3 className={styles.projectTitle}>{p.title}</h3>
            <p>{p.desc}</p>
            <ul className={styles.projectPoints}>
              {p.points.map((pt, idx) => <li key={idx}>{pt}</li>)}
            </ul>
            <div className={styles.projectActions}>
              <button className={styles.btnAction} type="button" onClick={() => onOpenPdf({ title: p.title, file: p.pdf })}>
                Xem PDF
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
