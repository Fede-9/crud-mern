import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowBlog from './blog/ShowBlog';
import CreateBlog from './blog/CreateBlog';
import EditBlog from './blog/EditBlog';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShowBlog />} />
          <Route path='/create' element={<CreateBlog />} />
          <Route path='/edit/:id' element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
