import './App.css'
import ToDo from './pages/ToDo'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'

function App() {
  return (
    <>
      <NavBar />
      <main className='app-main'>
        <Routes>
          <Route path='/' element={<ToDo />} />
          <Route path='/calendar' element={<CalendarPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
