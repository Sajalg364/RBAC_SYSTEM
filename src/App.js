import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RoleProvider } from './context/RoleContext';
import Sidebar from './components/Sidebar';
import DarkModeToggle from './components/DarkModeToggle';
import ProtectedRoute from './routes/ProtectedRoute';

import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Organizer from './pages/Organizer';
import User from './pages/User';
import Unauthorized from './pages/Unauthorized';
import Settings from './pages/Settings';
import Header from './components/Header';

const App = () => {
  return(
  <RoleProvider>
    <Router>
    <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex flex-1">
            <Sidebar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<ProtectedRoute page="dashboard"><Dashboard /></ProtectedRoute>} />
                <Route path="/admin" element={<ProtectedRoute page="admin"><Admin /></ProtectedRoute>} />
                <Route path="/organizer" element={<ProtectedRoute page="organizer"><Organizer /></ProtectedRoute>} />
                <Route path="/user" element={<ProtectedRoute page="user"><User /></ProtectedRoute>} />
                <Route path="/setting" element={<ProtectedRoute page="setting"><Settings /></ProtectedRoute>} />
                <Route path="/unauthorized" element={<Unauthorized />} />
              </Routes>
            </div>
            <DarkModeToggle />
          </div>
        </div>
      {/* <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<ProtectedRoute page="dashboard"><Dashboard /></ProtectedRoute>} />
            <Route path="/admin" element={<ProtectedRoute page="admin"><Admin /></ProtectedRoute>} />
            <Route path="/organizer" element={<ProtectedRoute page="organizer"><Organizer /></ProtectedRoute>} />
            <Route path="/user" element={<ProtectedRoute page="user"><User /></ProtectedRoute>} />
            <Route path="/setting" element={<ProtectedRoute page="setting"><Settings /></ProtectedRoute>} />
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </div>
        <DarkModeToggle />
      </div> */}
    </Router>
  </RoleProvider>
)};

export default App;
