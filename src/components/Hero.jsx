import styles from './Hero.module.css';

export default function Hero({ avatarUrl }) {
  return (
    <section className={`section ${styles.hero}`} id="about" aria-labelledby="hero-title">
      <div className={styles.introHeroHeader}>
        <div className={styles.introProfile}>
          <div className={styles.introAvatar} aria-label="Ảnh đại diện">
            <img src={avatarUrl || "https://placehold.co/220x220/111/fff?text=AVATAR"} alt="Ảnh đại diện" />
            <div className={styles.avatarGlow}></div>
          </div>
          <div className={styles.introTitle}>
            <p className={styles.introWelcome}>Welcome to my digital space</p>
            <h1 id="hero-title">Hoàng Viết Hoàng</h1>
            <div className={styles.introTags} aria-label="Thông tin học tập">
              <span>Lớp K70I IT2</span>
              <span>Information Technology</span>
              <span>UET - VNU</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.introCardGrid} aria-label="Thông tin mở đầu portfolio">
        <article className="gl-card">
          <div className={styles.introIcon} aria-hidden="true">
            ✦
          </div>
          <h2>Hồ sơ cá nhân</h2>
          <p>
            Tôi là Hoàng Viết Hoàng, sinh viên chuyên ngành Công nghệ thông tin tại Trường Đại học
            Công nghệ - ĐHQGHN. Với niềm đam mê khám phá thế giới số và mong muốn tạo ra những sản phẩm
            phần mềm đột phá, tôi luôn không ngừng học hỏi và rèn luyện mỗi ngày.
          </p>
          <div className={styles.introDivider}></div>
          <h3>Sở thích cá nhân</h3>
          <div className={styles.hobbyGrid}>
            <span>Game</span>
            <span>Code</span>
            <span>Ăn</span>
            <span>Ngủ</span>
          </div>
        </article>

        <article className="gl-card">
          <div className={styles.introIcon} aria-hidden="true">
            ◈
          </div>
          <h2>Định hướng phát triển</h2>
          <p>
            • Nắm vững các nền tảng kỹ thuật về cấu trúc dữ liệu, thuật toán và thiết kế kiến trúc phần mềm chuyên sâu.
          </p>
          <p>
            • Khám phá tiềm năng của Trí tuệ nhân tạo (AI) và cách tích hợp AI vào việc tự động hóa, nâng cao trải nghiệm người dùng.
          </p>
          <p>
            • Xây dựng bộ kỹ năng mềm toàn diện: tư duy phản biện, làm việc nhóm và năng lực giải quyết vấn đề thực tế.
          </p>
        </article>

        <article className="gl-card">
          <div className={styles.introIcon} aria-hidden="true">
            ✧
          </div>
          <h2>Về portfolio</h2>
          <p>
            Portfolio này được tạo ra để lưu giữ hành trình học tập môn Nhập môn Công nghệ số và Ứng dụng AI. 
            Mỗi dự án tại đây đại diện cho những nỗ lực trong việc tìm kiếm, phân tích thông tin, 
            ứng dụng AI một cách có đạo đức và hợp tác hiệu quả trong không gian mạng.
          </p>
        </article>
      </div>
    </section>
  );
}
