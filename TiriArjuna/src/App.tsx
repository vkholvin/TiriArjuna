import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Upload from './Upload'
import Settings from './settings'

// Assuming AddUser is also converted to TypeScript
// import AddUser from './users/AddUser';

// If you use functional components, there is no need to specify types here since you are not using props
function App() {
  return (
    <div className="App">    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
