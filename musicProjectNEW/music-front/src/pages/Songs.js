import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../context';

export default function Songs() {
  const { user } = useGlobalContext();
  const [songs, setSongs] = useState([]);
  useEffect(async () => {
    const { data } = await axios.get('/api/v1/songs');
    setSongs(data.songs);
    // console.log('data', data);
  }, []);
  // console.log('songs', songs);
  return (
    <div className='songs'>
      songs:
      {user.role === 'admin' && <div>Add Songs:</div>}
      <div>
        {songs.map((song) => {
          return (
            <div className='container text-center border m-5'>
              <h3>Title: {song.title}</h3>
              <h4>Artist: {song.artist}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
