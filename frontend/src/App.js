import { Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/main';
import MainPage from './pages/welcome';

function App() {
  return (
    <Routes>
      <Route path='/' element={<WelcomePage/>}/>
      <Route path='/home' element={<MainPage/>}/>
    </Routes>
  );
}

export default App;
