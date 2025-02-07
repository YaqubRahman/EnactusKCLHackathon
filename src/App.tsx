import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import StudentLogin from './pages/StudentLogin';
import Start from './pages/Start';
import './index.css';

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Start />}/>
        <Route path="/student" element={<StudentLogin />}/>
      </Routes>
    </Router>
  );
}