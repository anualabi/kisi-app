import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Groups from './components/Groups';
import GroupLocks from './components/GroupLocks';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Groups />}></Route>
        <Route path="/groupLocks/:groupId" element={<GroupLocks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
