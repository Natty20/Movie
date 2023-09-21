import { Routes, Route } from 'react-router-dom'
import Home from './MoviesList/Home'
import Movie from './MoviesList/Movie'

function App() {
  return (

    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/Movie'} element={<Movie />} />
    </Routes>
    // <div>
    //   <List />
    // </div>
  );
}

export default App;
