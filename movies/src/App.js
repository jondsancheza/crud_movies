//Components
import NavBar from './components/NavBar';
import AllMovies from './components/AllMovies';
import AddMovie from './components/AddMovie';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EditMovie from './components/EditMovie';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<AllMovies/>} />
        <Route path='/add' element={<AddMovie/>} />
        <Route path='/edit/:id'element={<EditMovie/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
