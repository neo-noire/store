import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { Header } from './components/Header/Header';
import { router } from './router/router';


const App = () => {

  return (
    <div className="appContainer">
      <Header />
      <RouterProvider router={router} />
      {/* <BestSellers /> */}
    </div>
  );
}

export default App;
