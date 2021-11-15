import { Route, Routes } from 'react-router-dom';
import { Header } from './components/NavBar';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import Login from './pages/SignIn';
import Dashboard from './pages/ListingPage';
import RequireAuth from './protectedRoute';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<Login />} />
        <Route element={<RequireAuth />}>
            <Route path="/home" element={<Dashboard />} />
        </Route>
        <Route element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
