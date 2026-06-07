import { useEffect } from 'react';
import styles from './PdfModal.module.css';

export default function PdfModal({ isOpen, onClose, title, file }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.pdfModal} aria-hidden={!isOpen}>
      <div className={styles.pdfDialog} role="dialog" aria-modal="true" aria-labelledby="pdf-title">
        <div className={styles.pdfHeader}>
          <h2 id="pdf-title">{title || "Tài liệu"}</h2>
          <button className={styles.pdfClose} onClick={onClose} type="button" aria-label="Đóng trình xem PDF">x</button>
        </div>
        <div className={styles.pdfContent}>
          {file ? (
            <iframe src={`/${file}`} title={title} className={styles.pdfIframe} />
          ) : (
            <p className={styles.mockText}>
              Bản xem trước tài liệu <strong>{title}</strong> không có sẵn vì chưa có file PDF thật.<br/><br/>
              Vui lòng thêm file PDF vào thư mục <code>public</code> và cấu hình lại component này.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
