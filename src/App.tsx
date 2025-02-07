import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLogin from './pages/StudentLogin';
import './index.css'

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<StudentLogin />}/>
      </Routes>
    </Router>
  )
}