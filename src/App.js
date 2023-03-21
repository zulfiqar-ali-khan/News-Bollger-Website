// css Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css";
//
import { Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>


  );
}

export default App;


// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 767,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// };