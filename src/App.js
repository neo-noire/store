import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/Header/Header';
import { router } from './router/router';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const App = () => {

  const modalState = useSelector((state) => state.addToCart.isOpen);
  useEffect(() => {
    modalState ? 
    document.body.style.overflow = 'hidden' 
    : document.body.style.overflow = 'auto'
  }, [modalState])

  
  return (
    <div className="appContainer">
      <Header />
      <RouterProvider className="router" router={router} />
    </div>
  );
}

export default App;
