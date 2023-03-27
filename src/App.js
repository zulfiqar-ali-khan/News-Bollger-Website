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
const Newscred = lazyLoad(() => import('./pages/Newscred'))
const Detail = lazyLoad(() => import('./pages/Detail'))
const Layout = lazyLoad(() => import('./components/layout'))
const Login = lazyLoad(() => import('./pages/Login'))
const Signup = lazyLoad(() => import('./pages/Signup'))
const NewsFeed = lazyLoad(() => import('./pages/NewsFeed'))


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/newscred" element={<Newscred />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newsfeed" element={<NewsFeed />} />
      </Routes>
    </Layout>


  );
}

export default App;
