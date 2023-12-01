import { BrowserRouter as Router } from 'react-router-dom';
import PageList from './pages/Pagelist';

function App() {
  return (
    <>
      <Router>
        <PageList />
      </Router>
    </>
  );
}

export default App;
