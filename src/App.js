import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/Index.js';
import EmployeeListPage from './components/EmployeeListPage.js';

function App() {
    return(
        <div>
          <Router> 
              <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/employee-list" element={<EmployeeListPage />} />
                  <Route path="*" element={<Index />} />
              </Routes>
          </Router>
        </div>
    );
}

export default App;