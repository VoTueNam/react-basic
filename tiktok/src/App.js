import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import Contact from './pages/Contact'

import './App.scss'

//Routes là cha, Route là con
//Link để thay thể thể href trg <a> và chuyển thành thẻ <Link/> để đảm bảo ko re-load lại trang mà chỉ render cái khác
function App() {


  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
