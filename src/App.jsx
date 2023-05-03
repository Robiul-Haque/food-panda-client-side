import { Outlet } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header.jsx';
import Footer from './component/Footer.jsx';

function App() {

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
