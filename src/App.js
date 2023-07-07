
import './App.scss';
import Menu from './components/Header';

import { Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Menu/>
      </header>
      
      <Outlet/>
      <footer>
        Footer Here
      </footer>
    </div>
  );
}

export default App;
