import styles from './Reflection.module.css';

export default function Reflection() {
  return (
    <section className={`section ${styles.reflectionSection}`} id="reflection" aria-labelledby="reflection-title">
      <div className={styles.sectionHeading}>
        <p className="eyebrow">Tổng kết</p>
        <h2 id="reflection-title">Nhìn lại hành trình</h2>
      </div>
      <div className={styles.reflectionGrid}>
        
        <article className="gl-card">
          <h3>Trải nghiệm & Cảm nhận</h3>
          <p>
            Quá trình xây dựng Portfolio này không chỉ là việc hoàn thành một bài tập cuối kỳ, mà giống như việc tự tay xây dựng một "căn cứ kỹ thuật số" cho riêng mình. Việc chuyển đổi từ những yêu cầu học thuật khô khan sang một sản phẩm thực tế mang đậm dấu ấn cá nhân đem lại cho tôi sự hào hứng rất lớn. Nhìn lại 6 bài tập đã qua, tôi cảm thấy tự hào vì thấy rõ sự trưởng thành của bản thân trong cả tư duy công nghệ lẫn phong cách làm việc.
          </p>
        </article>

        <article className="gl-card">
          <h3>Kiến thức & Kỹ năng cốt lõi</h3>
          <p>
            Về kiến thức, bài học giá trị nhất là cách ứng dụng Trí tuệ Nhân tạo (AI) một cách có đạo đức, từ việc thiết kế Prompt chuyên sâu đến tích hợp AI vào sáng tạo nội dung mà không vi phạm liêm chính học thuật. Về kỹ năng, việc tự tay code website này (React/CSS), quản lý dự án qua GitHub, và sử dụng thành thạo các công cụ làm việc nhóm trực tuyến (ClickUp, Discord) chính là hành trang quý giá nhất cho con đường Kỹ sư Phần mềm tương lai của tôi.
          </p>
        </article>

        <article className="gl-card">
          <h3>Tâm đắc & Thách thức</h3>
          <p>
            <strong>Điểm tâm đắc nhất:</strong> Tôi đã tự tay code toàn bộ giao diện từ con số 0 theo phong cách Glassmorphism Aurora hiện đại, thay vì dùng các template có sẵn như Wix hay Notion. Hệ thống hóa minh chứng rõ ràng, trực quan.<br/><br/>
            <strong>Thách thức:</strong> Khó khăn lớn nhất là việc tối ưu hóa giao diện (Responsive) để hiển thị mượt mà trên điện thoại và xử lý logic kết nối trình xem PDF trực tiếp trên web mà không làm nặng trang. Đồng thời, việc phải đối soát cẩn thận từng trích dẫn để đảm bảo chuẩn mực đạo đức AI cũng đòi hỏi sự tỉ mỉ rất cao.
          </p>
        </article>

      </div>
    </section>
  );
}
