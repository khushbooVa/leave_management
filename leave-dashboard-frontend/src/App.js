import logo from './logo.svg';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LeavePage from './components/LeavePage';

function App() {
  return (
    <div className="">
<BrowserRouter>
<Routes>
<Route path="/" element={<Dashboard/>} />
<Route path="/apply-leave" element={<LeavePage/>} />
</Routes>
</BrowserRouter>     
    </div>
  );
}

export default App;
