import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import User from './components/User/User';
import Home from './components/Home';
import Login from './components/Login/Login';
import Photo from './components/Photo/Photo';
import { UserStorage } from './UserContext';
import ProtectedRoute from './helper/ProtectedRoute';
import UserProfile from './components/User/UserProfile';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="login/*" element={<Login />}></Route>
            <Route
              path="conta/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="foto/:id" element={<Photo />}></Route>
            <Route path="perfil/:user" element={<UserProfile />}></Route>
            <Route path="/*" element={<NotFound />}></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
