import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LabIALanding from './pages/LabIALanding'
import LabResultsPage from './pages/LabResultsPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LabIALanding />} />
        <Route path="/results" element={<LabResultsPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App