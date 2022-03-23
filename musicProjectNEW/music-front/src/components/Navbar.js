import React from 'react';
import logo from '../logo.svg';
// import styled from 'styled-components';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { user, logoutUser } = useGlobalContext();
  return (
    <>
      <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow text-decoration-none'>
        <Link to='/' className='navbar-brand'>
          <img
            className='logo'
            src={logo}
            alt='logo'
            style={{ height: '50px', width: '50px' }}
          />
        </Link>
        {user && (
          <div className='nav justify-content-end pe-0'>
            <span className='text-light navbar-text'>Welcome {user.name}</span>
            <button
              className='nav-link btn btn-danger ms-5 me-2 text-light'
              onClick={() => logoutUser()}
            >
              Logout
            </button>
          </div>
        )}
      </header>
      {user && (
        <div className='row'>
          <nav className='col-md-2 d-none d-md-block bg-dark sidebar'>
            <div className='sidebar-sticky'>
              <ul className='nav flex-column'>
                <li className='nav-item'>
                  <Link to='/songs' className='nav-link'>
                    <span>Songs</span>
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/users' className='nav-link'>
                    <span>Users</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

// const Wrapper = styled.nav`
//   background: #fff;
//   height: 6rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .nav-center {
//     width: 90vw;
//     max-width: 1120px;
//   }
//   .nav-links {
//     display: flex;
//     flex-direction: column;
//   }
//   .nav-links p {
//     margin: 0;
//     text-transform: capitalize;
//     margin-bottom: 0.25rem;
//   }
//   .home-link {
//     display: flex;
//     align-items: flex-end;
//   }
//   @media (min-width: 776px) {
//     .nav-links {
//       flex-direction: row;
//       align-items: center;
//     }
//     .nav-links p {
//       margin: 0;
//       margin-right: 1.5rem;
//     }
//   } ;
// `;
