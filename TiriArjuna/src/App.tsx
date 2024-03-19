import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Upload from './Upload'
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
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
