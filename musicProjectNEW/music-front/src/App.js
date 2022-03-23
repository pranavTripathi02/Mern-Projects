// import logo from './logo.svg';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Register, Login, Songs, ProtectedRoute, Users } from './pages';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import { useGlobalContext } from './context';

function App() {
  // const { isLoading } = useGlobalContext();
  // if (isLoading) {
  //   return (
  //     <section className='page page-center'>
  //       <div className='loading'></div>
  //     </section>
  //   );
  // }
  return (
    <>
      <aside>
        <Navbar />
      </aside>
      {/* <main className='justify-content-center col-md-9 ml-sm-auto col-lg-10 pt-3 px-4'> */}
      <div className='container-fluid'>
        <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard/songs' element={<Songs />} />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path='/users'
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
