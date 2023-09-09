import { Route, Routes, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './components/Header.js'
import NotesListPage from './page/NotesListPage'
import NotePage from './page/NotePage'

function App() {
  return (
    <div className="container">
      <div className="app">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage/>} />
            <Route path="/note/:id/" element={<NotePage/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
