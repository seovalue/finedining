import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import chefImageWebp from './assets/chef.webp';

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
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div className="home">
      {showPopup && (
        <div className="update-popup">
          <div className="popup-content">
            <h3>메뉴가 업데이트되었어요 🎉</h3>
            <p>새로운 메뉴를 확인해보세요.</p>
            <div className="popup-buttons">
              <Link to="/finedining/menu" className="menu-button">메뉴 보기</Link>
              <button onClick={() => setShowPopup(false)}>닫기</button>
            </div>
          </div>
        </div>
      )}
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
      <h2>Tasting Course</h2>
      <div className="menu-content">
        <div className="menu-item">
          <h3>『 돋움 』</h3>
          <p>새우를 곁들인 계란찜</p>
          <p className="eng-menu">Steamed Egg Custard with Shrimp</p>
        </div>

        <div className="menu-item">
          <h3>『 시원한 시작 』</h3>
          <p>명란 오챠즈케</p>
          <p className="eng-menu">Ochazuke with Pollock Roe</p>
        </div>

        <div className="menu-item">
          <h3>『 전통의 맛 』</h3>
          <p>산적꼬치와 칼칼한 어묵탕</p>
          <p className="eng-menu">Grilled Skewered Meat with Spicy Fish Cake Soup</p>
        </div>

        <div className="menu-item">
          <h3>『 Happy Birthday 』</h3>
          <p>장어덮밥과 미역국</p>
          <p className="eng-menu">Grilled Eel Rice Bowl with Seaweed Soup</p>
        </div>

        <div className="menu-item">
          <h3>『 풍미의 여운 』</h3>
          <p>함바그 스테이크</p>
          <p className="eng-menu">Hamburg Steak</p>
        </div>

        <div className="menu-item">
          <h3>『 달콤한 피날레 』</h3>
          <p>초콜릿과 미니 케이크</p>
          <p className="eng-menu">Chocolate and Mini Cake</p>
        </div>
        <div className="menu-notice">
          <p>* 메뉴는 변경될 수 있습니다.</p>
        </div>
      </div>
    </div>
  );
}

function Story() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const fallbackImage = "https://github.com/user-attachments/assets/d0c22184-da8f-493d-b62e-c20027161b09";

  return (
    <div className="story-page">
      <h2>Our Story</h2>
      <div className="story-content">
        <p>
          月燈(월등)은 전통 한식의 맛과 현대적 감각이 조화를 이루는 
          모던 한식 다이닝입니다. 제철 식재료를 활용한 
          독창적인 요리를 통해 새로운 미식 경험을 선사합니다.
        </p>
        <br />
        <p>
          2025년 1월 28일 신규 오픈 예정입니다.
        </p>
        
        <div className="chef-section">
          <div className={`chef-image ${!imageLoaded ? 'loading' : ''}`}>
            <picture>
              <source srcSet={chefImageWebp} type="image/webp" />
              <img 
                src={fallbackImage}
                alt="Head Chef"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
              />
            </picture>
            {!imageLoaded && <div className="image-placeholder">이미지 로딩중...</div>}
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
