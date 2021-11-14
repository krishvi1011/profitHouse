import { Route, Routes } from 'react-router-dom';
import { Header } from './components/NavBar';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Login from './pages/SignIn';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<Login />} />
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
