import {Routes, Route} from 'react-router-dom';
import NotFound from "./NotFound";
import HomeMenu from "./common/HomeMenu/HomeMenu";
import Footer from "./common/Footer";
import Home from "./Home";
import Pay from "./Pay";
import './App.scss';

function App() {
  return (
    <div className="app">
        <HomeMenu />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/pay" element={<Pay/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
