import Login from './pages/Login';
import Package from './pages/Package';
import Payment from './pages/Payment';
import Success from './pages/Success';
import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  document.body.style = 'background: #e1e1e1';
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}> </Route>
          <Route path="/packages" element={<Package />}> </Route>
          <Route path="/payment" element={<Payment />}> </Route>
          <Route path="/success" element={<Success />}> </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
