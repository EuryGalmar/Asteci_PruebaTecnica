import './App.scss';

import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import Table from './components/table';
import Details from './components/Details';

function App() {


  return (
      <HashRouter>
        <Routes>
         
          <Route index path="/" element={<Table />} />
          
          <Route path="/:id" element={<Details />} />
        </Routes>
      </HashRouter>
  );
}

export default App;
