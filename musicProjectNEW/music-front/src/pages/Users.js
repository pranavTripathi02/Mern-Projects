import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context';

export default function Users() {
  const { user } = useGlobalContext();
  const [users, setUsers] = useState([]);

  const allUsers = async () => {
    const { data } = await axios.get('/api/v1/user/');
    setUsers(data.users);
  };

  // if (user.role === 'admin') {
  useEffect(() => {
    allUsers();
  }, [user.role]);
  // }

  return (
    <>
      <Wrapper>
        <div>
          <h3>My Info</h3>
          <p>
            Name:<span> {user.name}</span>
          </p>
          <p>
            UserID:<span> {user.userID}</span>
          </p>
          <p>
            Role:<span> {user.role}</span>
          </p>
        </div>
        {user.role === 'admin' && (
          <div>
            <h3>All Users</h3>
            {users.map((user) => {
              return (
                <>
                  <div className='border my-3' key={user.userID}>
                    <p>
                      Name: <span>{user.name}</span>
                    </p>
                    <p>
                      UserID: <span>{user.userID}</span>
                    </p>
                    <p>
                      Email: <span>{user.email}</span>
                    </p>
                    <p>
                      Role: <span>{user.role}</span>
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  div {
    // display: float;
  }
  p span {
    text-transform: capitalize;
    background: #645cff;
    padding: 0.15rem 0.25rem;
    color: #fff;
    border-radius: 0.25rem;
    letter-spacing: 1px;
  }
  span {
    color: blue;
  }
  Link {
    border: 1rem solid #000;
  }
`;
