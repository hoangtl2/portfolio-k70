import styles from './Process.module.css';

export default function Process() {
  return (
    <section className={`section ${styles.processSection}`} id="process" aria-labelledby="process-title">
      <div className={styles.sectionHeading}>
        <p className="eyebrow">Quy trình</p>
        <h2 id="process-title">Cách tôi xây dựng portfolio</h2>
      </div>
      <div className={styles.timeline}>
        <div className="gl-card">
          <div className={styles.timelineHeader}>
            <span className={styles.timelineSpan}>01</span>
            <h3>Thiết lập nền tảng</h3>
          </div>
          <p>
            Xây dựng website bằng React, HTML, CSS, sau đó tổ chức các khu vực chính
            gồm giới thiệu, dự án, quy trình và tổng kết.
          </p>
        </div>
        <div className="gl-card">
          <div className={styles.timelineHeader}>
            <span className={styles.timelineSpan}>02</span>
            <h3>Hệ thống hóa minh chứng</h3>
          </div>
          <p>
            Tập hợp 6 file PDF theo từng bài, đặt tên rõ ràng và liên kết trực tiếp vào từng
            thẻ dự án để người xem có thể kiểm tra sản phẩm cuối cùng.
          </p>
        </div>
        <div className="gl-card">
          <div className={styles.timelineHeader}>
            <span className={styles.timelineSpan}>03</span>
            <h3>Biên tập và hoàn thiện</h3>
          </div>
          <p>
            Rút gọn nội dung báo cáo thành phần mô tả dễ đọc, bổ sung bộ lọc kỹ năng và trình
            xem PDF để portfolio gọn gàng, dễ tra cứu.
          </p>
        </div>
      </div>
    </section>
  );
}
