// css Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";
//
import { Routes, Route } from "react-router-dom";
import lazyLoad from './utils/lazy-loading'

// Pages
const Home = lazyLoad(() => import('./pages/Home'))
const Detail = lazyLoad(() => import('./pages/Detail'))
const Layout = lazyLoad(() => import('./components/layout'))


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Layout>


  );
}

export default App;
