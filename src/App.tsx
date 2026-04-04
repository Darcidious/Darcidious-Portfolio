import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import SmudgeTransition from './components/ui/SmudgeTransition'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import ProjectDetail from './pages/ProjectDetail'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
           <Route index element={<SmudgeTransition><Home /></SmudgeTransition>} />
           <Route path="about" element={<SmudgeTransition><About /></SmudgeTransition>} />
           <Route path="work" element={<SmudgeTransition><Work /></SmudgeTransition>} />
           <Route path="work/:slug" element={<SmudgeTransition><ProjectDetail /></SmudgeTransition>} />
           <Route path="contact" element={<SmudgeTransition><Contact /></SmudgeTransition>} />
           <Route path="*" element={<SmudgeTransition><NotFound /></SmudgeTransition>} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
