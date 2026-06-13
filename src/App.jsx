import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Process from './components/Process'
import Reflection from './components/Reflection'
import PdfModal from './components/PdfModal'
import CustomCursor from './components/CustomCursor'
import Particles from './components/Particles'
import './index.css'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [pdfInfo, setPdfInfo] = useState({ title: '', file: '' })

  const handleOpenPdf = (info) => {
    setPdfInfo(info)
    setModalOpen(true)
  }

  const handleClosePdf = () => {
    setModalOpen(false)
    setPdfInfo({ title: '', file: '' })
  }

  return (
    <>
      <CustomCursor />
      <Particles />
      <Header />
      <main id="top">
        <Hero avatarUrl={`${import.meta.env.BASE_URL}avatar.jpg`} />
        <Projects onOpenPdf={handleOpenPdf} />
        <Process />
        <Reflection />
      </main>

      <footer className="section" style={{ padding: '2rem 5vw', background: 'rgba(15, 17, 21, 0.5)', borderTop: '1px solid var(--gl-glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: 'var(--muted)', backdropFilter: 'blur(10px)' }}>
        <p>© {new Date().getFullYear()} Hoàng Viết Hoàng. Xây dựng bằng React & Glassmorphism.</p>
        <a href="#top" style={{ color: 'var(--gl-cyan)', textTransform: 'uppercase', fontWeight: 'bold' }}>Lên đầu trang</a>
      </footer>

      <PdfModal isOpen={modalOpen} onClose={handleClosePdf} title={pdfInfo.title} file={pdfInfo.file} />
    </>
  )
}

export default App
