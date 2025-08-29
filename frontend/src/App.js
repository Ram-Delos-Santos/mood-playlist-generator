import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/main/main';
import WelcomePage from './pages/welcome/welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/home' element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
