import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ApplicationPage } from './pages/ApplicationPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/apply/:company" element={<ApplicationPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
