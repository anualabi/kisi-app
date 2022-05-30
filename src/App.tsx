import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Groups from './components/Groups';
import GroupLocks from './components/GroupLocks';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Groups />}></Route>
        <Route path="/groupLocks/:groupId" element={<GroupLocks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
