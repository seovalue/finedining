import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="logo">
            <Link to="/finedining">月燈 (월등)</Link>
          </div>
          <div className="nav-links">
            <Link to="/finedining/story">OUR STORY</Link>
            <Link to="/finedining/menu">MENU</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/finedining" element={<Home />} />
          <Route path="/finedining/story" element={<Story />} />
          <Route path="/finedining/menu" element={<Menu />} />
          <Route path="/" element={<Navigate to="/finedining" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h1>月燈 (월등)</h1>
        <p>한식의 새로운 경험</p>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="menu-page">
      <h2>Menu</h2>
      <div className="menu-grid">
        <div className="menu-item">
          <h3>Signature Course</h3>
          <p>계절을 담은 코스</p>
          <p className="price">시가에 따라 변동</p>
        </div>
        <div className="opening-notice">
          <p>2024년 1월 28일 신규 오픈 예정</p>
        </div>
      </div>
    </div>
  );
}

function Story() {
  return (
    <div className="story-page">
      <h2>Our Story</h2>
      <div className="story-content">
        <p>
          月燈(월등)은 전통 한식의 맛과 현대적 감각이 조화를 이루는 
          모던 한식 다이닝입니다. 제철 식재료를 활용한 
          독창적인 요리를 통해 새로운 미식 경험을 선사합니다.
        </p>
        
        <div className="chef-section">
          <div className="chef-image">
            {/* 셰프 이미지가 들어갈 자리 */}
          </div>
          <div className="chef-info">
            <h3>Head Chef</h3>
            <h4>서민정</h4>
            <div className="chef-career">
              <p>- 前 미슐랭 3스타 月燈 (월등) 수석 셰프</p>
              <p>- 당근 4년차 Software Engineer</p>
              <p>- 정보 처리 기사 자격증 취득</p>
              <p>- 경희대학교 응용수학과 및 컴퓨터공학과 복수 전공</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
