import LoginForm from './components/LoginForm/LoginForm';
import Packets from './components/Packets/Packets';
import "./App.scss";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />}> </Route>
          <Route path="/packets" element={<Packets />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
