import styles from './Hero.module.css';
import TiltCard from './TiltCard';

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
        <TiltCard className="gl-card">
          <div className={styles.introIcon} aria-hidden="true">
            ✦
          </div>
          <h2>Hồ sơ cá nhân</h2>
          <p>
            Tôi là Hoàng Viết Hoàng, sinh viên chuyên ngành Công nghệ thông tin tại Trường Đại học
            Công nghệ - ĐHQGHN. Với niềm đam mê khám phá thế giới số và mong muốn tạo ra những sản phẩm
            phần mềm đột phá, tôi luôn không ngừng học hỏi và rèn luyện mỗi ngày.
          </p>
        </TiltCard>

        <TiltCard className="gl-card">
          <div className={styles.introIcon} aria-hidden="true">
            ◈
          </div>
          <h2>Định hướng phát triển</h2>
          <p>
            • Nghiên cứu chuyên sâu về An toàn thông tin, phân tích lỗ hổng bảo mật và các kỹ thuật tấn công/phòng thủ mạng.
          </p>
          <p>
            • Xây dựng và triển khai các hệ thống bảo mật an toàn, ứng dụng mật mã học để bảo vệ dữ liệu người dùng và hệ thống doanh nghiệp.
          </p>
          <p>
            • Rèn luyện tư duy đánh giá bảo mật (Penetration Testing), dịch ngược phần mềm và tích cực tham gia các giải đấu thực chiến CTF (Capture The Flag).
          </p>
        </TiltCard>

        <TiltCard className="gl-card">
          <div className={styles.introIcon} aria-hidden="true">
            ✧
          </div>
          <h2>Về portfolio</h2>
          <p>
            Portfolio này được tạo ra để lưu giữ hành trình học tập môn Nhập môn Công nghệ số và Ứng dụng AI. 
            Mỗi dự án tại đây đại diện cho những nỗ lực trong việc tìm kiếm, phân tích thông tin, 
            ứng dụng AI một cách có đạo đức và hợp tác hiệu quả trong không gian mạng.
          </p>
        </TiltCard>
      </div>
    </section>
  );
}
